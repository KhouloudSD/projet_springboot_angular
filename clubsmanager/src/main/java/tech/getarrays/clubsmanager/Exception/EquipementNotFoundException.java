package tech.getarrays.clubsmanager.Exception;

import tech.getarrays.clubsmanager.model.Equip_Salle.Equipement;

public class EquipementNotFoundException extends RuntimeException {
    public EquipementNotFoundException(String message) {
        super(message);
    }
}
