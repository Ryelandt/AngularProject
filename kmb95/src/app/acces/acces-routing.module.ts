import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { MembersComponent } from '../admin/members/members.component';
import { ProfilComponent } from '../profil/profil.component';

export const accesRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'members',
    component: MembersComponent,
  },
  {
    path: 'profil',
    component: ProfilComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(accesRoutes)],
  exports: [RouterModule]
})
export class AccesRoutingModule { }
