package tech.getarrays.clubsmanager.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.getarrays.clubsmanager.model.Actors.Club;
import tech.getarrays.clubsmanager.model.Equip_Salle.Equipement;
import tech.getarrays.clubsmanager.service.ClubService;

import java.util.List;


@RestController
@RequestMapping("/clubs")

public class ClubController {

    @Autowired
     private final ClubService clubService;

    public ClubController(ClubService clubService) {
        this.clubService=clubService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Club>> getAllClubs (){
        List<Club> clubs = clubService.findAllClubs();
        return new ResponseEntity<>(clubs, HttpStatus.OK);
    }


    @GetMapping("/find/{id}")
    public ResponseEntity<Club> getClubById(@PathVariable ("id") Long id) throws Throwable {
        Club club = clubService.findClubById(id);
        return new ResponseEntity<>(club, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Club> addClub (@RequestBody Club club) {
        Club clubn = clubService.addClub(club);
        return new ResponseEntity<>(clubn , HttpStatus.CREATED);
    }


    @DeleteMapping("/delete/{id}")
    public void deleteClub (@PathVariable ("id") long id) {
        clubService.deleteClub(id);
    }

}
