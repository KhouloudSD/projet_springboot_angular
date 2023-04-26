package tech.getarrays.clubsmanager.model.clubrelated;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.web.WebProperties;
import tech.getarrays.clubsmanager.model.Actors.Club;
import tech.getarrays.clubsmanager.model.Equip_Salle.Equipement;
import tech.getarrays.clubsmanager.model.Equip_Salle.Salle;

import java.time.LocalDate;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table( name="T_event")
public class Event {


    @Id
    @Column(name="id_event")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id_event;

    private String event_name;
    private String event_type;
    private String raison;
    private LocalDate DateDebut;
    private  LocalDate DateFin;

    @ManyToOne
    @JoinColumn(name = "club_id")
    private Club club;

    @ManyToMany
    @JoinTable(name = "event_equipment",
       joinColumns = @JoinColumn(name = "event_id"),
       inverseJoinColumns = @JoinColumn (name = "equipment_id"))
    private Set<Equipement> equipement =new HashSet<>();

    @ManyToMany
    @JoinTable(name = "event_salle",
            joinColumns = @JoinColumn(name = "event_id"),
            inverseJoinColumns = @JoinColumn(name = "salle_id"))
    private Set<Salle> salles = new HashSet<>();


    public Event(String event_name, String event_type, String raison, LocalDate dateDebut, LocalDate dateFin, Club club, Set<Equipement> equipement, Set<Salle> salles) {
        this.event_name = event_name;
        this.event_type = event_type;
        this.raison = raison;
        DateDebut = dateDebut;
        DateFin = dateFin;
        this.club = club;
        this.equipement = equipement;
        this.salles = salles;
    }


    public void setEquipement(Set<Equipement> equipement) {
        this.equipement = equipement;
    }

    public void setSalles(Set<Salle> salles) {
        this.salles = salles;
    }
}

