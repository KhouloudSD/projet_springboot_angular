package tech.getarrays.clubsmanager.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import tech.getarrays.clubsmanager.model.Actors.Club;

import java.util.Optional;

public interface ClubRepository extends JpaRepository<Club,Long> {

    Optional<Club> findByEmail (String email);

    Club findClubById (Long id);

    Boolean existsByEmail(String email);
    void delete (Club club);

    void deleteClubById(Long id);
}
