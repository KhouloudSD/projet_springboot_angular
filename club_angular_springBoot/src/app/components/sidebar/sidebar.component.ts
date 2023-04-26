import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role, User } from 'src/app/models';
import { AuthenticationService } from 'src/app/services';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    
    { path: '/Club_Register', title: 'Gestion des Clubs',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/equip_gest', title: 'Gestion des equipements',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/Club_tables', title: 'Clubs activities',  icon:'ni-pin-3 text-orange', class: '' },

    
    { path: '/reservations', title: 'Reservations',  icon:'ni-planet text-blue', class: '' },
    { path: '/membres', title: 'Gestion des Membres',  icon:'ni-bullet-list-67 text-red', class: '' },
    
    
    //{ path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    //{ path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  user!: User;
  public menuItemsA: any[];
  public menuItemsU: any[];

  public isCollapsed = true;

  constructor(private router: Router,
    private service : AuthenticationService) {
      this.service.user.subscribe(x => this.user = x);
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
  ngOnInit() {
    this.menuItemsA = ROUTES.filter(menuItem => menuItem && (menuItem.path != '/reservations')  && (menuItem.path != '/membres') && (menuItem.path != '/apercu-du-club') );
    this.menuItemsU = ROUTES.filter(menuItem => menuItem && (menuItem.path != '/Club_Register')  && (menuItem.path != '/equip_gest') && (menuItem.path != '/Club_tables') );

    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
