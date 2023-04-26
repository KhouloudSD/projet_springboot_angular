package tech.getarrays.clubsmanager.model.clubrelated;


import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tech.getarrays.clubsmanager.model.Actors.Club;

import java.time.LocalDate;
import java.time.Period;


@Data
@Entity
@Table(name = "T_Members")
@Getter
@Setter
@NoArgsConstructor
public class Members {

    @Id
    @SequenceGenerator(
            name = "MEMBER_SEQ",
            sequenceName = "MEMBER_SEQ",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "MEMBER_SEQ"
    )
    private Long id;

    private String name;

    @Column(nullable = false , unique = true)
    private String email;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Pole pole ;

    @Enumerated(EnumType.STRING)
    private Class classe;

    private LocalDate birthday;

    private String phoneNumber ;

    @Transient
    private int age;



    int getAge(){
        LocalDate today = LocalDate.now();
        Period period = Period.between( this.birthday , today);
        return period.getYears();

    }



    public Members(String name,
                   String email,
                   Pole pole,
                   LocalDate birthday,
                   String phoneNumber,
                   int age) {
        this.name = name;
        this.email = email;
        this.pole = pole;
        this.birthday = birthday;
        this.phoneNumber = phoneNumber;
        this.age = age;
    }


}
