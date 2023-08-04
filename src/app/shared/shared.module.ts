import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './components/tabs/tabs.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';



@NgModule({
  declarations: [TabsComponent, MenuComponent, HeaderMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
  ],
  exports: [TabsComponent, MenuComponent, HeaderMenuComponent]
})
export class SharedModule { }
