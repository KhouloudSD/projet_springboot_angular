import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models';
import { AuthenticationService } from 'src/app/services';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  
  user!: User;
  constructor(private service:AuthenticationService) { 
    this.service.user.subscribe(x => this.user = x);

  }

  ngOnInit() {
  }

}
