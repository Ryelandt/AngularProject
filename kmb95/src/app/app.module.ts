import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { ClubComponent } from './pages/club/club.component';
import { KravComponent } from './pages/krav/krav.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { AccesComponent } from './pages/acces/acces.component';
import { NavbarComponent } from './navbar/navbar.component';



import { environment } from '../environments/environment.prod';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth.service';
import { ProfilComponent } from './profil/profil.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MembersComponent } from './admin/members/members.component';
import { AccesRoutingModule } from './acces/acces-routing.module';


const routes: Routes = [
  {
    path: '',
    component:  HomeComponent  ,
  },
  {
    path: 'club',
    component:  ClubComponent  ,
  },
  {
    path: 'krav',
    component:  KravComponent  ,
  },
  {
    path: 'inscription',
    component:  InscriptionComponent  ,
  }, 
  
  {
    path: 'acces',
    component:  AccesComponent  ,
   
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClubComponent,
    KravComponent,
    InscriptionComponent,
    AccesComponent,
    NavbarComponent,
    ProfilComponent,
    DashboardComponent,
    MembersComponent
  ],
  imports: [
    
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AccesRoutingModule,
    NgbModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
