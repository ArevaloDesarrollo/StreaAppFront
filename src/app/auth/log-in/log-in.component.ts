import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/home/services/auth.service';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
import Swal from 'sweetalert2';
import { BodyLogin } from '../interfaces/body-login';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent  implements OnInit {

  public FormReactive: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.patternEmail)]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private validatorsService: ValidatorsService
  ) { }

  ngOnInit() {}


  toRegister(){
    this.router.navigateByUrl('/auth/signin');
  }

  public login(){
    
    const email: string = this.FormReactive.get('email')?.value;
    const password: string = this.FormReactive.get('password')?.value;

    const body: BodyLogin = {email, password};

    this.authService.loginUser(body)
      .subscribe( resp => {
        if(resp.ok === true){

          this.router.navigateByUrl('/home');

        }else{
          Swal.fire({
            title: 'Error',
            heightAuto: false,
            icon: 'warning',
            text: resp.message
          });
        }
      }); 

  }

}
