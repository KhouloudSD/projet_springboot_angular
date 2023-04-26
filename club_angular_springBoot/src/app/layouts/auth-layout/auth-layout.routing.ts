import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { AuthGuard } from 'src/app/helpers';
import { AuthGuardADMIN } from 'src/app/helpers/auth.admin.guard';
import { Role } from 'src/app/models';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { MembresComponent } from 'src/app/pages/membres/membres.component';
import { ApercuDuClubComponent } from 'src/app/pages/apercu-du-Club/apercu-du-club.component';
import { ReservationComponent } from 'src/app/pages/reservations/reservations.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';

export const AuthLayoutRoutes: Routes = [
  { path: 'dashboard',      
    component: DashboardComponent},
    { path: 'login',          
      component: LoginComponent ,
      canActivate :[ AuthGuardADMIN],
    },
    { path: 'register',       
      component: RegisterComponent ,
      canActivate :[ AuthGuardADMIN],
    },
    { path: 'apercu-du-club',   component: ApercuDuClubComponent,
    canActivate :[ AuthGuardADMIN]},

    { path: 'membres',       
      component: MembresComponent, 
     canActivate :[ AuthGuardADMIN]},

    { path: 'reservations',          
      component: ReservationComponent , 
      canActivate :[AuthGuardADMIN]},
]

@NgModule({
    imports: [
      CommonModule,
      BrowserModule,
      RouterModule.forRoot(AuthLayoutRoutes)
    ]
  })
  export class AuthLayoutRoutingModule { }



;
