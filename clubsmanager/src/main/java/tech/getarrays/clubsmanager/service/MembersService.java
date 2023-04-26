package tech.getarrays.clubsmanager.service;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import tech.getarrays.clubsmanager.model.Equip_Salle.Equipement;
import tech.getarrays.clubsmanager.model.clubrelated.Event;
import tech.getarrays.clubsmanager.model.clubrelated.Members;
import tech.getarrays.clubsmanager.model.clubrelated.Pole;
import tech.getarrays.clubsmanager.repo.EquipementRepository;
import tech.getarrays.clubsmanager.repo.MembersRepository;

import java.util.List;

@Service
@Transactional
public class MembersService {
    @Autowired
    private final MembersRepository membersRepository;

    public MembersService (MembersRepository membersRepository) {
        this.membersRepository = membersRepository;
    }

    public Members addMember (Members member) {
        return this.membersRepository.save(member);
    }

    public List<Members> getAllProjetPoleMembers() { return  membersRepository.getAllProjetPoleMembers();}
    public List<Members> getAllMarketingPoleMembers() { return  membersRepository.getAllMarketingPoleMembers();}
    public List<Members> getAllRESPONSABLE() { return  membersRepository.getAllRESPONSABLE();}
    public List<Members> getAllDevPoleMembers() { return  membersRepository.getAllDevPoleMembers();}


    public List<Members> findAllMembersByPole(Pole pole) {
        return membersRepository.findAllByPole(pole);
    }

    public List<Members> findAllMembers() {
        return membersRepository.findAll();
    }

    public Members updateMembers(Members members) {
        return membersRepository.save(members);
    }

    public void deleteMembersById (Long id) {
        membersRepository.deleteMembersById(id);
    }

    public Members findMembersById(Long id) {
        return membersRepository.findMembersById(id)
                .orElseThrow(() -> new UsernameNotFoundException("member by id " + id + " is not found"));
    }

}
