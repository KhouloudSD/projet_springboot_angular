package tech.getarrays.clubsmanager.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.getarrays.clubsmanager.model.Equip_Salle.Equipement;
import tech.getarrays.clubsmanager.model.Equip_Salle.Salle;
import tech.getarrays.clubsmanager.service.SalleService;

import java.util.List;

@RestController
@RequestMapping("/Salle")
public class SalleController {

    private final SalleService salleService;


    public SalleController(SalleService salleService) {
        this.salleService = salleService;
    }

    @GetMapping("/all")
    public  ResponseEntity<List<Salle>>getAllSalles(){
        List <Salle> salles = salleService.findAllSalles();
        return new ResponseEntity<>(salles, HttpStatus.OK);
    }


    @GetMapping("/Available")
    public  ResponseEntity<List<Salle>>getAllAvailableSalles(){
        List <Salle> salles = salleService.findAvailableSalle();
        return new ResponseEntity<>(salles, HttpStatus.OK);
    }

    @GetMapping("/NoAvailable")
    public  ResponseEntity<List<Salle>>getAllNoAvailableSalles(){
        List <Salle> salles = salleService.findNoAvailableSalle();
        return new ResponseEntity<>(salles, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Salle>getSallesById(@PathVariable("id") Long id){
        Salle salles = salleService.findSalleById(id);
        return new ResponseEntity<>(salles, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Salle> addSalle(@RequestBody Salle salle){
        Salle newSalle= salleService.addSalle(salle);
        return new ResponseEntity<>(newSalle, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<Salle> updateSalle(@RequestBody Salle salle){
        Salle updateSalle= salleService.updateSalle(salle);
        return new ResponseEntity<>(updateSalle, HttpStatus.OK);
    }
    @DeleteMapping ("/delete/{id}")
    public ResponseEntity<?> deleteSalle(@PathVariable("id") Long id){
        salleService.deleteSalle(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}