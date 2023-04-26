package tech.getarrays.clubsmanager.Security.auth;


import lombok.*;

@Data
@Builder
@EqualsAndHashCode
@ToString
@AllArgsConstructor
@NoArgsConstructor

public class RegisterRequest {
    private String email;
    private String password;
}
