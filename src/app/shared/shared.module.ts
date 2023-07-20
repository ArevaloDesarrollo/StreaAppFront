import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './components/tabs/tabs.component';



@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
  ],
  exports: [TabsComponent]
})
export class SharedModule { }
