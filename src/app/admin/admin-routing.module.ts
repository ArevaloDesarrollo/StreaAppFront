import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddAcountsComponent } from './pages/add-acounts/add-acounts.component';
import { StreamingComponent } from './pages/streaming/streaming.component';

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'add-acount',
        component: AddAcountsComponent
      },
      {
        path: 'streaming',
        component: StreamingComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
