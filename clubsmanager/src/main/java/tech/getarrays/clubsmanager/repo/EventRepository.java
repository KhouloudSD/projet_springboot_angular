package tech.getarrays.clubsmanager.repo;


import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import org.springframework.data.jpa.repository.JpaRepository;
import tech.getarrays.clubsmanager.model.Actors.Club;
import tech.getarrays.clubsmanager.model.clubrelated.Event;
import tech.getarrays.clubsmanager.model.clubrelated.Members;
import tech.getarrays.clubsmanager.model.clubrelated.Pole;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;


public interface EventRepository extends JpaRepository<Event, Long> {

    Optional<Event> findById (Long id);

    List<Event> findEventByClub (Club club);


}
