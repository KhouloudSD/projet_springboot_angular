package tech.getarrays.clubsmanager.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import tech.getarrays.clubsmanager.Exception.EquipementNotFoundException;
import tech.getarrays.clubsmanager.model.Actors.User;
import tech.getarrays.clubsmanager.model.Equip_Salle.Equipement;
import tech.getarrays.clubsmanager.repo.EquipementRepository;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public  class EquipementService {

    @Autowired
    private final EquipementRepository equipementRepository;

    public EquipementService(EquipementRepository equipementRepository) {
        this.equipementRepository = equipementRepository;
    }
    public Equipement addEquipement(Equipement equipement) {
        return this.equipementRepository.save(equipement);
    }
    public List<Equipement> findAllEquipements() {
        return equipementRepository.findAll();
    }

    public Equipement updateEquipement(Equipement equipement) {
        return equipementRepository.save(equipement);
    }

    public void deleteEquipement(long id) {
        equipementRepository.deleteEquipementByid((int)id);
    }
    public Equipement findEquipementById(long id) {
        return equipementRepository.findEquipementById((int)id)
                .orElseThrow(() -> new UsernameNotFoundException("Equipement by id " + id + " is not found"));
    }

}




