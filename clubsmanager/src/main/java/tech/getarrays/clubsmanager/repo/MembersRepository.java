package tech.getarrays.clubsmanager.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import tech.getarrays.clubsmanager.model.Actors.Club;
import tech.getarrays.clubsmanager.model.Equip_Salle.Salle;
import tech.getarrays.clubsmanager.model.clubrelated.Members;
import tech.getarrays.clubsmanager.model.clubrelated.Pole;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface MembersRepository extends JpaRepository<Members, Long> {


    @Query("SELECT s FROM Members s WHERE s.pole ='PROJET' ")
    List<Members> getAllProjetPoleMembers();

    @Query("SELECT s FROM Members s WHERE s.pole ='MARKETING' ")
    List<Members> getAllMarketingPoleMembers();

    @Query("SELECT s FROM Members s WHERE s.pole ='RESPONSABLE' ")
    List<Members> getAllRESPONSABLE();

    @Query("SELECT s FROM Members s WHERE s.pole ='DEVELOPPEMENT_COMMERCIAL' ")
    List<Members> getAllDevPoleMembers();

    Optional<Members> findByEmail (String email);

    List<Members> findAllByPole(Pole pole);

    Optional<Members> findMembersById (Long id);

    Boolean existsByEmail(String email);

    void deleteMembersById(Long id);


}
