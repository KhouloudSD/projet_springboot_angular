package tech.getarrays.clubsmanager.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import tech.getarrays.clubsmanager.model.Equip_Salle.Salle;

import java.util.List;
import java.util.Optional;

public interface SalleRepository extends JpaRepository<Salle,Long> {


    @Query("SELECT s FROM Salle s WHERE s.isAvailable = 1")
    List<Salle> getAllAvailableSalle();

    @Query("SELECT s FROM Salle s WHERE s.isAvailable = 0")
    List<Salle> getAllNoAvailableSalle();
    Optional<Salle> findSalleById(int id);


    void deleteSalleByid(int id);
}
