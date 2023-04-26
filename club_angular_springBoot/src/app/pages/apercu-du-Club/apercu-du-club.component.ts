import { Component, OnInit } from '@angular/core';
import { Role, User } from 'src/app/models';
import { AuthenticationService } from 'src/app/services';

@Component({
  selector: 'app-apercu-du-club',
  templateUrl: './apercu-du-club.component.html',
  styleUrls: ['./apercu-du-club.component.scss']
})
export class  ApercuDuClubComponent implements OnInit {

  
  user!: User;

    constructor(private authenticationService: AuthenticationService) {
        this.authenticationService.user.subscribe(x => this.user = x);
    }

    get isAdmin() {
        return this.user && this.user.role === Role.Admin;
    }
    getusername() {
      return this.user.username;
    }

    logout() {
        this.authenticationService.logout();
    }
  ngOnInit() {
  }
  

}
