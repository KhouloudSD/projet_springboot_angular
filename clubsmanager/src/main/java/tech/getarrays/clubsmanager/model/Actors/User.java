package tech.getarrays.clubsmanager.model.Actors;


import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;


import java.io.Serial;
import java.io.Serializable;


@Data
@Entity
@NoArgsConstructor
@DynamicUpdate
@DynamicInsert
@AllArgsConstructor
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS )
@Table(name = "users" , uniqueConstraints = {@UniqueConstraint(columnNames = {"email"})})


public abstract class User implements Serializable {


    @Serial
    private static final long serialVersionUID =1L;

    @Id
    @SequenceGenerator(
            name = "USER_SEQ",
            sequenceName = "USER_SEQ",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "USER_SEQ"
    )
    protected Long id;


    protected String name ;

    @Column (unique = true, nullable = false)
    @Size(max = 60)
    @Email
    protected String email;

    @Column(nullable = false)
    protected String password;

    protected Long phone;

    protected String fbUrl ;


    @Enumerated(EnumType.STRING)
    protected Role role;


    public User(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public User(Long id) {
        this.id = id;
    }


    public User(Long id,
                String name,
                String email,
                Long phone,
                String fbUrl,
                String password,
                Role role)
    {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.fbUrl = fbUrl;
        this.password = password;
        this.role = role ;
    }


    public User(String name,
                String email,
                Long phone,
                String fbUrl,
                String password,
                Role role)
    {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.fbUrl = fbUrl;
        this.password = password;
        this.role = role;
    }

    public  long getId() {return id;}

    public String getName (){return name;}

    public void setName(String name) {
        this.name = name;
    }

    public void setFbUrl(String fbUrl) {
        this.fbUrl = fbUrl;
    }

    public void setPhone(Long phone) {
        this.phone = phone;
    }

    public Long getPhone() {
        return phone;
    }

    public String getFbUrl() {
        return fbUrl;
    }



    public void setEmail(String email){this.email = email;}
    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {return role;}
    public void setRole(Role role) {this.role = role;}



}
