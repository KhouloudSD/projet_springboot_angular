import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services';
import { Role, User } from 'src/app/models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user!: User;
  public focus;
  public listTitles: any[];
  public location: Location;
  constructor(location: Location,  private element: ElementRef, 
              private router: Router,
              private service : AuthenticationService) {
    this.location = location;
    this.service.user.subscribe(x => this.user = x);
  }
  
  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }
  
  get isAdmin() {
    return this.user && this.user.role === Role.Admin;
  }
  
  getUsername() {
     return this.user.lastName +' '+ this.user.firstName;
  }

  logout() {
    this.service.logout();
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }

}
