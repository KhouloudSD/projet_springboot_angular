import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private apiServeurUrl= environment.apiBaseUrl;
    private userSubject: BehaviorSubject<User>;

    public user: Observable<User>;
    nulluser!:User ;


    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject;
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    
    login(username: string, password: string) {
        return this.http.post<any>(`${this.apiServeurUrl}/users/authenticate`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        this.userSubject.next(this.nulluser);
        this.router.navigate(['/loginn']);
    }
    
    get isLoggedIn(): boolean {
        return !!localStorage.getItem('user');
    }

    get isAdmin(): boolean {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        return user.role === 'Admin';
    }
}
