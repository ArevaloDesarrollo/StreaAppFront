import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddAcountsComponent } from './pages/add-acounts/add-acounts.component';
import { StreamingComponent } from './pages/streaming/streaming.component';


@NgModule({
  declarations: [AdminHomeComponent, DashboardComponent, AddAcountsComponent, StreamingComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    IonicModule
  ]
})
export class AdminModule { }
