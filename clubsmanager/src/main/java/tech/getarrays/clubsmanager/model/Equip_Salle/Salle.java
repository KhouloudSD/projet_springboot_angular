package tech.getarrays.clubsmanager.model.Equip_Salle;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;


@Entity
@Table(name = "T_Salle")
@Data
@NoArgsConstructor
@Builder


public class Salle  implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private long id;

    @Column(name = "SALLE_state")
    private String state;

    private long capacity;
    private long num ;

    private int isAvailable ;



    public  boolean salleIsAvailable (){
        return (this.isAvailable ==1);
    }
    public void setId(long id) {
        this.id = id;
    }

    public void setState(String state) {
        this.state = state;
    }

    public void setCapacity(Long capacity) {
        this.capacity = capacity;
    }

    public void setNum(long num) {
        this.num = num;
    }

    public Long getId() {
        return id;
    }

    public String getState() {
        return state;
    }

    public Long getCapacity() {
        return capacity;
    }

    public Long getNum() {
        return num;
    }

    public Salle(long capacity, long num) {
        this.capacity = capacity;
        this.num = num;
    }



    public Salle(long id, String state, long capacity, long num, int isAvailable) {
        this.id = id;
        this.state = state;
        this.capacity = capacity;
        this.num = num;
        this.isAvailable = isAvailable;
    }

    public Salle(long id, String state, long capacity, long num) {
        this.id = id;
        this.state = state;
        this.capacity = capacity;
        this.num = num;
    }
}
