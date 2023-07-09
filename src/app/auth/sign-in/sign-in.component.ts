import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { catchError, tap } from 'rxjs';

import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent  implements OnInit {

  FormReactive: FormGroup = this.fb.group({
    name: ['', [Validators.required, this.sharedService.emptyString]],
    lastName: ['', [Validators.required, this.sharedService.emptyString]],
    email: ['', [Validators.required, Validators.pattern(this.sharedService.patternEmail), this.sharedService.emptyString, this.sharedService.existEmail]],
    username: ['', [Validators.required, this.sharedService.emptyString]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    cellPhone: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
  });

  constructor(private fb: FormBuilder,
              private sharedService: SharedService,
              private toastController: ToastController) { }

  ngOnInit() {}

  generateMsgError(field: string, nameFiledEsp: string, value: string):string{

    const errors = this.FormReactive.get(field)?.errors;
    let message = '';
    if(errors){
      if(field === 'name' || field === 'lastName' || field === 'username'){
        message = `El campo ${nameFiledEsp} es obligatorio.`;
      }else if(field === 'email'){
        message = `El ${nameFiledEsp} debe ser una dirección de correo valido.`;
      } else if(field === 'cellPhone'){
        message = `El ${nameFiledEsp} debe tener minimo 10 caracteres.`;
      }else if(field === 'password'){
        message = `El ${nameFiledEsp} debe tener minimo 8 caracteres.`;
      }
    }
    console.log(message);
    
    return message;
  }

  async validField(e: Event){
    const objHtml = (e.target as HTMLInputElement);
    const objParent = (objHtml.parentElement as HTMLDivElement);
    const field = objHtml.name;
    const nameFieldEsp = objHtml.getAttribute('placeholder');
    const inputValue = objHtml.value;
    
    const toast = await this.toastController.create({
      message: this.generateMsgError(field, nameFieldEsp!, inputValue),
      duration: 3000,
      position: 'bottom',
      color: 'danger',
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel'
        }
      ]
    });

    if(this.FormReactive.get(field)?.invalid && this.FormReactive.get(field)?.touched){
      objParent.classList.add('red-border');
      await toast.present();
    }else{
      objParent.classList.remove('red-border');
    }
  }

}
