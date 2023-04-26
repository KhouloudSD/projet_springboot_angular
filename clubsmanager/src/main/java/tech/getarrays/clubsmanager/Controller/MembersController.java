package tech.getarrays.clubsmanager.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.getarrays.clubsmanager.model.Equip_Salle.Equipement;
import tech.getarrays.clubsmanager.model.clubrelated.Event;
import tech.getarrays.clubsmanager.model.clubrelated.Members;
import tech.getarrays.clubsmanager.service.EquipementService;
import tech.getarrays.clubsmanager.service.MembersService;

import java.util.List;
@RestController
@RequestMapping("/Members")


public class MembersController {

    private final MembersService membersService;


    public MembersController(MembersService membersService) {
        this.membersService = membersService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<Members>> getAllMembers(){
        List <Members> members = membersService.findAllMembers();
        return new ResponseEntity<>(members, HttpStatus.OK);
    }

    @GetMapping("/P_Projet")
    public ResponseEntity<List<Members>> getAllProjetPoleMembers(){
        List <Members> members = membersService.getAllProjetPoleMembers();
        return new ResponseEntity<>(members, HttpStatus.OK);
    }
    @GetMapping("/P_Marketing")
    public ResponseEntity<List<Members>> getAllMarketingPoleMembers(){
        List <Members> members = membersService.getAllMarketingPoleMembers();
        return new ResponseEntity<>(members, HttpStatus.OK);
    }
    @GetMapping("/Responsable")
    public ResponseEntity<List<Members>> getAllRESPONSABLE(){
        List <Members> members = membersService.getAllRESPONSABLE();
        return new ResponseEntity<>(members, HttpStatus.OK);
    }
    @GetMapping("/P_Dev")
    public ResponseEntity<List<Members>> getAllDevPoleMembers(){
        List <Members> members = membersService.getAllDevPoleMembers();
        return new ResponseEntity<>(members, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Members>getMembersById(@PathVariable("id") Long id){
        Members members = membersService.findMembersById (id);
        return new ResponseEntity<>(members, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Members> addMembers(@RequestBody Members members){
        Members newMember= membersService.addMember (members);
        return new ResponseEntity<>(newMember, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Members> updateMember (@RequestBody Members member){
        Members updateMember = membersService.updateMembers (member);
        return new ResponseEntity<>(updateMember, HttpStatus.OK);
    }
    @DeleteMapping ("/delete/{id}")
    public ResponseEntity<?> deleteMember (@PathVariable("id") Long id){
        return new ResponseEntity<>(HttpStatus.OK);
    }
}