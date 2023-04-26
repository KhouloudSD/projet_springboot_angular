package tech.getarrays.clubsmanager.model.Equip_Salle;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.io.Serializable;




@Entity
@Builder
@Data
@Table(name = "T_Equipement")
@AllArgsConstructor
@NoArgsConstructor

public class Equipement  implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private long id;

    @Column(name = "Eq_state")
    private String state;

    private String name;




    public Equipement(String name) {
        this.name = name;
    }

    public Equipement(String state, String name) {
        this.state = state;
        this.name = name;

    }

    public void setId(long id) {
        this.id = id;
    }

    public void setState(String state) {
        this.state = state;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public String getState() {
        return state;
    }

    public String getName() {
        return name;
    }
}
