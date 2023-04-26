import { Component, OnInit } from '@angular/core';
import { Role, User } from 'src/app/models';
import { AuthenticationService } from 'src/app/services';
declare const google: any;

@Component({
  selector: 'app-clubregister',
  templateUrl: './clubRegister.component.html',
  styleUrls: ['./clubRegister.component.scss']
})
export class ClubRegisterComponent implements OnInit {

  
  
  user!: User;

    constructor(private authenticationService: AuthenticationService) {
      
    }

  ngOnInit() {
    
    }


}
