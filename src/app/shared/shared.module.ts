import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { TabsComponent } from './components/tabs/tabs.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { ListSlidingComponent } from './components/list-sliding/list-sliding.component';
import { ListAccountsComponent } from './components/list-accounts/list-accounts.component';
import { FormProfileComponent } from './components/form-profile/form-profile.component';
import { ItemsProfileComponent } from './components/items-profile/items-profile.component';
import { DinamycComponentDirective } from './directives/dinamyc-component.directive';
import { ModalAccountsComponent } from './components/modal-accounts/modal-accounts.component';



@NgModule({
  declarations: [
    TabsComponent, 
    MenuComponent, 
    HeaderMenuComponent, 
    ListSlidingComponent, 
    ListAccountsComponent, 
    FormProfileComponent, 
    ItemsProfileComponent, 
    DinamycComponentDirective,
    ModalAccountsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
  ],
  exports: [
    TabsComponent, 
    MenuComponent, 
    HeaderMenuComponent, 
    ListSlidingComponent, 
    ListAccountsComponent, 
    FormProfileComponent, 
    ItemsProfileComponent,
    ModalAccountsComponent
  ]
})
export class SharedModule { }
