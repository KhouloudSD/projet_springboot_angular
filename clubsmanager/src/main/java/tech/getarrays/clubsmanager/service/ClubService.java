package tech.getarrays.clubsmanager.service;


import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.getarrays.clubsmanager.model.Actors.Club;
import tech.getarrays.clubsmanager.model.clubrelated.Event;
import tech.getarrays.clubsmanager.repo.ClubRepository;
import tech.getarrays.clubsmanager.repo.EventRepository;
import tech.getarrays.clubsmanager.repo.UserRepository;

import javax.validation.constraints.Null;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class ClubService extends UserService {

    @Autowired
     private final ClubRepository clubRepository;
    private final EventRepository eventRepository;
    public List<Club> findAllClubs ()
    { return  this.clubRepository.findAll();}

    public Club findClubById (Long id) {
        return this.clubRepository.findClubById(id);
    }


    public Club addClub (Club club) {return this.clubRepository.save(club);}

    public void deleteClub(Long id) {
        Club club = findClubById(id);
        clubRepository.delete(club) ;

        List<Event> ll = eventRepository.findEventByClub(club);
        for (int i=0 ; i< ll.size(); i++){
            for (Event EV : ll) {
                eventRepository.delete(EV);
            }
        }
    }
    public void update (Long id , Club Club){
        update(id,Club);
        Club clubb = clubRepository.findClubById(id);
        clubb.setDescription(Club.getDescription());
        clubb.setImageUrl(Club.getImageUrl());
        clubRepository.save(clubb);
    }

}
