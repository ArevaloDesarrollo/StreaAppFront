import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IonicModule } from '@ionic/angular';
import { AddAcountsComponent } from './pages/add-acounts/add-acounts.component';


@NgModule({
  declarations: [AdminHomeComponent, DashboardComponent, AddAcountsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    IonicModule
  ]
})
export class AdminModule { }
