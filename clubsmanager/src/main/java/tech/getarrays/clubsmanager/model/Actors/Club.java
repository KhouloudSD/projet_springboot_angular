package tech.getarrays.clubsmanager.model.Actors;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import tech.getarrays.clubsmanager.Security.token.Token;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;


@Entity
@EqualsAndHashCode(callSuper = true)
@Data
@Table(name = "T_CLUBS" , uniqueConstraints = {@UniqueConstraint(columnNames = {"email"})})
@NoArgsConstructor


public class Club extends User  implements UserDetails, Serializable {

    private String imageUrl;

    private String description ;


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority((role.name())));
    }


    @OneToMany(mappedBy = "club")
    private List<Token> tokens;

    @Override
    public String getPassword() {
        return password;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getUsername() { return email; }
    public void  setUsername( String email) {this.email=email;}

    public boolean isAccountNonExpired() {
        return true;
    }

    public boolean isAccountNonLocked() {
        return true;
    }

    public boolean isCredentialsNonExpired() {
        return true;
    }

    public boolean isEnabled() { return true; }


    public Club(String email, String password){
        super(email,password);
    }
    @Builder
    public Club(String name, String email, Long phone, String fbUrl, String password, Role role, String imageUrl, String description) {
        super(name, email, phone, fbUrl, password, role);
        this.imageUrl = imageUrl;
        this.description = description;
    }
}
