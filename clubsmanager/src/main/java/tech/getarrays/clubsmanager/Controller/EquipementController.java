package tech.getarrays.clubsmanager.Controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.getarrays.clubsmanager.model.Equip_Salle.Equipement;
import tech.getarrays.clubsmanager.service.EquipementService;
import java.util.List;
@RestController
@RequestMapping("/Equipement")

public class EquipementController {

    private final EquipementService equipementService;


    public EquipementController(EquipementService equipementService) {
        this.equipementService = equipementService;
    }
    @GetMapping("/all")
    public  ResponseEntity<List<Equipement>>getAllEquipements(){
        List <Equipement> equipements = equipementService.findAllEquipements();
        return new ResponseEntity<>(equipements, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Equipement>getEquipementsById(@PathVariable("id") long id){
        Equipement equipements = equipementService.findEquipementById(id);
        return new ResponseEntity<>(equipements, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Equipement> addEquipement(@RequestBody Equipement equipement){
        Equipement newEquipement= equipementService.addEquipement(equipement);
        return new ResponseEntity<>(newEquipement, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<Equipement> updateEquipement(@RequestBody Equipement equipement){
        Equipement updateEquipement= equipementService.updateEquipement(equipement);
        return new ResponseEntity<>(updateEquipement, HttpStatus.OK);
    }
    @DeleteMapping ("/delete/{id}")
    public String deleteEquipement(@PathVariable("id") long id){
        equipementService.deleteEquipement(id);
        return "equipement deleted succcessgggg";
    }
}