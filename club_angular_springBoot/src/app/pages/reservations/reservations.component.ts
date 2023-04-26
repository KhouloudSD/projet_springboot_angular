import { Component, OnInit } from '@angular/core';
import { Role, User, Event } from 'src/app/models';
import { AuthenticationService } from 'src/app/services';
import { EventService } from 'src/app/pages/reservations/event.service';


@Component({
  selector: 'app-icons',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationComponent implements OnInit {

  public copy: string;
  events: Event[] ;
  selectedEvent: Event = new Event();
  action : string;
  
  user!: User;

    constructor(private authenticationService: AuthenticationService,
        private  eventService: EventService) {
        this.authenticationService.user.subscribe(x => this.user = x);
    }
    get isAdmin() {
        return this.user && this.user.role === Role.Admin;
    }
  ngOnInit() : void{
    this.getEvents();
  }

  private getEvents(){
    this.eventService.getEventsList().subscribe(data => {
      this.events = data;
    })
  }

 

  onSubmit() {
    if (this.selectedEvent.id_event === undefined) {
      // Add new event
      this.eventService.createEvent(this.selectedEvent)
        .subscribe(event => {
          this.events.push(event);
          this.selectedEvent = new Event();
        });
    } else {
      // Update existing event
      this.eventService.updateEvent(this.selectedEvent.id_event , this.selectedEvent)
        .subscribe(() => {
          this.selectedEvent = new Event();
        });
    }
  }
  // Delete an event
deleteEvent(eventId: number) {
  if (confirm(`Are you sure you want to delete the event ?`)) {
    this.eventService.deleteEvent(eventId)
      .subscribe(() => {
        this.events = this.events.filter(e => e.id_event !== eventId);
        this.action = '';
      });
  }
}


editEvent(event: Event) {
  this.selectedEvent = event;
  this.action = 'Edit';
}

cancel() {
  this.selectedEvent = new Event();
  this.action = '';
}







}
