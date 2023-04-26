
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../../models/Eventt';
import { environment } from 'src/environments/environment';

// this.http.get<Equipement[]>(`${this.apiServeurUrl}/Equipement`)

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiServeurUrl= environment.apiBaseUrl;

  constructor(private http: HttpClient) { }



  
  getEvent(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.apiServeurUrl}/events/find/${id}`);
  }

  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(`${this.apiServeurUrl}/events/add`, event);
  }

  updateEvent(id: number, event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.apiServeurUrl}/events/update/${id}`, event);
  }

  deleteEvent(id: number): Observable<any> {
    return this.http.delete(`${this.apiServeurUrl}/events/delete/${id}`, { responseType: 'text' });
  }

  getEventsList(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiServeurUrl}/events/all`);
  }
}
