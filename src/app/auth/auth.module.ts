import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonicModule } from '@ionic/angular';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SharedModule } from '../shared/shared.module';
import { LogInComponent } from './log-in/log-in.component';


@NgModule({
  declarations: [SignInComponent, LogInComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
