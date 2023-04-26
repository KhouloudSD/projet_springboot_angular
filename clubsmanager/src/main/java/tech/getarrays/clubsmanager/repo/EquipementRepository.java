package tech.getarrays.clubsmanager.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import tech.getarrays.clubsmanager.model.Equip_Salle.Equipement;

import java.util.List;
import java.util.Optional;

public interface EquipementRepository extends JpaRepository<Equipement, Long> {

    Optional<Equipement> findEquipementById(int id);



    void deleteEquipementByid(int id);
}
