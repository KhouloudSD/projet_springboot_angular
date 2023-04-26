import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services';

import { Role, User } from 'src/app/models';



@Component({
  selector: 'app-clubs-tables',
  templateUrl: './clubs-tables.component.html',
  styleUrls: ['./clubs-tables.component.scss']
})
export class ClubsTablesComponent implements OnInit {

  
  user!: User;

    constructor(private authenticationService: AuthenticationService) {
      
    }

  ngOnInit() {
    
  }

}
