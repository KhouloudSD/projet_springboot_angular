import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Club } from '../models/Club';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private apiServerUrl = environment.apiBaseUrl;
    private userSubject: BehaviorSubject<Club>;

    public club: Observable<Club>;
    nullClub: Club ;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<Club>(JSON.parse(localStorage.getItem('club') || '{}'));
        this.club = this.userSubject.asObservable();
    }

    public get userValue(): Club {
        return this.userSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${this.apiServerUrl}/auth/authenticate`, { username, password })
            .pipe(map(club => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('club', JSON.stringify(club));
                this.userSubject.next(club);
                return club;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        this.userSubject.next(this.nullClub);
        this.router.navigate(['/login']);
    }
    
    get isLoggedIn(): boolean {
        return !!localStorage.getItem('user');
    }

    get isAdmin(): boolean {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        return true;
    }
}
