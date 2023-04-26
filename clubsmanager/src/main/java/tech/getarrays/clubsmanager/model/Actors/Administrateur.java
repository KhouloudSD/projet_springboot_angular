package tech.getarrays.clubsmanager.model.Actors;


import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.*;


@Entity
@Table(name = "T_ADMIN" , uniqueConstraints = {@UniqueConstraint(columnNames = {"email"})})
@Data
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
@Getter
@Setter

public class Administrateur extends User   {


    public Administrateur(String name, String email, Long phone, String fbUrl, String password, Role role) {
        super(name, email, phone, fbUrl, password, role);
    }
}
