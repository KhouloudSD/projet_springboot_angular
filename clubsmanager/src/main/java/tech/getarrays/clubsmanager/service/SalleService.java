package tech.getarrays.clubsmanager.service;


import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import tech.getarrays.clubsmanager.model.Equip_Salle.Salle;
import tech.getarrays.clubsmanager.repo.SalleRepository;

import java.util.List;

@Service
@Transactional
public class SalleService {
    @Autowired
    private final SalleRepository salleRepository;

    public SalleService(SalleRepository salleRepository) {
        this.salleRepository = salleRepository;
    }

    public List<Salle> findAvailableSalle() {

        return salleRepository.getAllAvailableSalle() ;

    }
    public List<Salle> findNoAvailableSalle() {

        return salleRepository.getAllNoAvailableSalle() ;

    }



    public Salle addSalle(Salle salle) {
        return this.salleRepository.save(salle);
    }

    public List<Salle> findAllSalles() {
        return salleRepository.findAll();
    }

    public Salle updateSalle(Salle salle) {
        return salleRepository.save(salle);
    }

    public void deleteSalle(long id) {
        salleRepository.deleteSalleByid((int)id);
    }

    public Salle findSalleById(long id) {
        return salleRepository.findSalleById((int)id)
                .orElseThrow(() -> new UsernameNotFoundException("Equipement by id " + id + " is not found"));
    }


}







