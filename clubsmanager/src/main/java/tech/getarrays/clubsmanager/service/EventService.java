package tech.getarrays.clubsmanager.service;


import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import tech.getarrays.clubsmanager.model.Actors.Club;
import tech.getarrays.clubsmanager.model.Equip_Salle.Equipement;
import tech.getarrays.clubsmanager.model.Equip_Salle.Salle;
import tech.getarrays.clubsmanager.model.clubrelated.Event;
import tech.getarrays.clubsmanager.repo.EventRepository;

import java.util.List;
import java.util.Set;

@Service
@Transactional
@RequiredArgsConstructor
public class EventService {
    @Autowired
    private final EventRepository eventRepository;

    public List<Event> getAllEvents(){
        return eventRepository.findAll();
    }

    public Event getEventById(Long id){
        return eventRepository.findById(id).orElseThrow(() -> new RuntimeException("Event not found"));
    }

    public List<Event> getEventByClub(Club club){
        return eventRepository.findEventByClub(club);
    }

    public void deleteById(Long id){
        eventRepository.deleteById(id);
    }

    public Club findClubByEvent(Event event){
        return event.getClub();
    }
    public Set<Salle> findSalleByIdEvent(Long id){
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Event not found i will not return salles"));
        return event.getSalles();
    }

    public  Set<Equipement> findEquipementByIdEvent(Long id){
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Event not found i will not return equipements"));
        return event.getEquipement();
    }

    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }

    public Event updateEvent(Long id, Event updatedEvent) {

        Event event = getEventById(id);

        event.setEvent_name(updatedEvent.getEvent_name());
        event.setEvent_type(updatedEvent.getEvent_name());
        event.setRaison(updatedEvent.getRaison());
        event.setDateDebut(updatedEvent.getDateDebut());
        event.setDateFin(updatedEvent.getDateFin());
        event.setClub(updatedEvent.getClub());
        event.setEquipement(updatedEvent.getEquipement());
        event.setSalles(updatedEvent.getSalles());
        return eventRepository.save(event);
    }

    public void deleteEvent(Long id) {
        Event event = getEventById(id);
        eventRepository.delete(event);
    }


    public Event findEventById(Long id) {

        return eventRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("Equipement by id " + id + " is not found"));

    }
}
