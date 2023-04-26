import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ReservationComponent } from '../../pages/reservations/reservations.component';
import { ClubRegisterComponent } from 'src/app/pages/club_register/clubRegister.component';
import { ApercuDuClubComponent } from '../../pages/apercu-du-Club/apercu-du-club.component';
import { MembresComponent } from '../../pages/membres/membres.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorInterceptor, fakeBackendProvider, JwtInterceptor } from 'src/app/helpers';
import { EquipementComponent } from 'src/app/pages/equipement/equipement.component';
import { ClubsTablesComponent } from 'src/app/pages/clubs-tables/clubs-tables.component';
import { equipementservice } from 'src/app/pages/equipement/equipement.service';
import { BrowserModule } from '@angular/platform-browser';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    ClubRegisterComponent,
    EquipementComponent,
    ClubsTablesComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    [equipementservice],

    // provider used to create fake backend
    fakeBackendProvider
  ]
})

export class AdminLayoutModule {}
