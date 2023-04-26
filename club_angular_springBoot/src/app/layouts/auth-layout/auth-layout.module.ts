import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { ErrorInterceptor, fakeBackendProvider, JwtInterceptor } from 'src/app/helpers';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApercuDuClubComponent } from 'src/app/pages/apercu-du-Club/apercu-du-club.component';
import { MembresComponent } from 'src/app/pages/membres/membres.component';
import { ReservationComponent } from 'src/app/pages/reservations/reservations.component';
import { ClipboardModule } from 'ngx-clipboard';
import { equipementservice } from 'src/app/pages/equipement/equipement.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    NgbModule,
    HttpClientModule,
    ClipboardModule
    // NgbModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ApercuDuClubComponent,
    MembresComponent,
    ReservationComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
     [equipementservice],
    // provider used to create fake backend
    fakeBackendProvider
  ]
})
export class AuthLayoutModule { }
