import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ReservationComponent } from '../../pages/reservations/reservations.component';
import { ClubRegisterComponent } from 'src/app/pages/club_register/clubRegister.component';
import { ApercuDuClubComponent } from '../../pages/apercu-du-Club/apercu-du-club.component';
import { MembresComponent } from '../../pages/membres/membres.component';
import { AuthGuard } from 'src/app/helpers';
import { Role } from 'src/app/models';
import { AuthGuardADMIN } from 'src/app/helpers/auth.admin.guard';
import { AuthGuardUSER } from 'src/app/helpers/auth.user.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { EquipementComponent } from 'src/app/pages/equipement/equipement.component';
import { ClubsTablesComponent } from 'src/app/pages/clubs-tables/clubs-tables.component';

export const AdminLayoutRoutes: Routes = [
     { path: 'dashboard',      
      component: DashboardComponent},
     { path: 'equip_gest',      
     component: EquipementComponent,
     canActivate :[AuthGuardUSER]},
     { 
      path: 'Club_Register',           
      component: ClubRegisterComponent, 
      canActivate :[AuthGuardUSER]},
     { 
      path: 'Club_tables',           
      component: ClubsTablesComponent, 
      canActivate :[AuthGuardUSER]}
      
   
]

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(AdminLayoutRoutes)
  ]
})
export class AdminLayoutRoutingModule { }


;
