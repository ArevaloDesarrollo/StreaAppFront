import { Component, OnInit } from '@angular/core';

import { StreamingService } from '../../services/streaming.service';
import { Streaming } from '../../interfaces/streaming';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared/services/shared.service';
import { AccountService } from '../../services/account.service';
import { BodyAccount } from '../../interfaces/body-account';
import { User } from 'src/app/auth/interfaces/user';
import { Person } from 'src/app/auth/interfaces/person';
import { Role } from 'src/app/auth/interfaces/role';
import { AuthService } from 'src/app/home/services/auth.service';
import Swal from 'sweetalert2';
import { Account } from '../../interfaces/account';
import { BodyProfile } from '../../interfaces/body-profile';

@Component({
  selector: 'app-add-acounts',
  templateUrl: './add-acounts.component.html',
  styleUrls: ['./add-acounts.component.scss'],
})
export class AddAcountsComponent  implements OnInit {

  public streamings!: Streaming[];
  public accounts!: Account[];
  public user!: User;
  public person!: Person;
  public role!: Role;
  public allowsItems: number = 0;

  public FormReactive: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.sharedService.patternEmail)]],
    password: ['', [Validators.required]],
    idStreaming: ['', [Validators.required]],
  });

  private profiles: BodyProfile[] = [];

  constructor(
    private streamingService: StreamingService,
    private sharedService: SharedService,
    private accountService: AccountService,
    private authService: AuthService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {

    console.log(this.FormReactive);
    
    
    this.streamingService.getStreamings()
      .subscribe( resp => {
        if(resp.ok){
          this.streamings = [...resp.streamings!];
        }
      });

    this.user = this.authService.user;
    this.person = this.authService.user.person;
    this.role = this.authService.user.role;

    this.accountService.getAccounts()
      .subscribe( resp => {
        if(resp.ok) {
          this.accounts = [...resp.accounts!];
        }
      });

  }

  public assignValue(e: Event): void{
    const value = (e.target as HTMLSelectElement).value;
    const streaming = this.streamings.find(streaming => streaming.id === value);
    this.allowsItems = streaming?.amount_profiles || 0;
  }

  public registerAccount(): void{

    const {email, password, price, idStreaming, priceProfile, amountProfiles} = this.FormReactive.value;
    const idRole: string = this.role.id;

    this.getBodyProfiles();

    const body: BodyAccount = {email, password, price, idStreaming, idRole, priceProfile, amountProfiles, profiles: this.profiles};

    this.accountService.registerAccountWithProfiles(body)
      .subscribe( resp => {
        if(resp.ok){
          this.FormReactive.reset();
          this.accounts = [ ...this.accounts, resp.account!];
          this.profiles = [];
          this.resetInputs();
          this.allowsItems = 0;
        }else{
          console.log(resp);
          
          Swal.fire({
            title: 'Información',
            text: resp.message || resp.errors![0].msg,
            icon: 'info',
            heightAuto: false,
          }); 
        }
      });    
  }

  private getBodyProfiles(): void{
    const inputsProfiles: NodeListOf<HTMLIonInputElement> = document.querySelectorAll('.name_profile');
    const pinProfiles: NodeListOf<HTMLIonInputElement> = document.querySelectorAll('.pin_profile');
    for (let i = 0; i < inputsProfiles.length; i++) {
      const valueProfile = inputsProfiles[i].value?.toString() || '';
      const valuePin = pinProfiles[i].value?.toString() || '';
      this.profiles.push({name: valueProfile, pin: valuePin});
    }
  }

  private resetInputs(): void{
    const contenElements: NodeListOf<HTMLIonItemElement> = document.querySelectorAll('.item_from_profile')!;
    this.clearElemet(contenElements);
  }

  private clearElemet(elements: NodeListOf<HTMLIonItemElement>): void{
    console.log(elements);
    elements.forEach(element => {
      element.remove();
    });
  }
  

}
