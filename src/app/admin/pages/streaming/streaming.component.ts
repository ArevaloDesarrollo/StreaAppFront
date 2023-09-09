import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Person } from 'src/app/auth/interfaces/person';
import { Role } from 'src/app/auth/interfaces/role';
import { User } from 'src/app/auth/interfaces/user';
import { AuthService } from 'src/app/home/services/auth.service';
import Swal from 'sweetalert2';
import { StreamingService } from '../../services/streaming.service';
import { BodyStreaming } from '../../interfaces/body-streaming';
import { Streaming } from '../../interfaces/streaming';


@Component({
  selector: 'app-streaming',
  templateUrl: './streaming.component.html',
  styleUrls: ['./streaming.component.scss'],
})
export class StreamingComponent  implements OnInit {

  public FormReactive: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    price_account: ['', [Validators.required, Validators.min(1000)]],
    price_profile: ['', [Validators.required, Validators.min(1000)]],
    amount_profiles: ['', [Validators.required, Validators.min(1)]],
  })

  private imgFile!: File | null;
  private imgView!: HTMLIonImgElement;
  private contentImg!: Element;
  public streamings!: Streaming[];

  public user!: User;
  public person!: Person;
  public role!: Role;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private streamingService: StreamingService
  ) { }

  ngOnInit() {
    this.user = {...this.authService.user};
    this.person = {...this.authService.user?.person};
    this.role = {...this.authService.user?.role};

    this.contentImg = document.querySelector('#contentImg')!;
    this.imgView = this.contentImg.querySelector('ion-img')!;

    this.streamingService.getStreamings()
      .subscribe( resp => {
        if(resp.ok){
          this.streamings = [...resp.streamings!];
        }
      });
  }

  public registerStreaming(){
    if(this.imgFile){

      const name: string = this.FormReactive.get('name')?.value;
      const price_account: number = this.FormReactive.get('price_account')?.value;
      const price_profile: number = this.FormReactive.get('price_profile')?.value;
      const amount_profiles: number = this.FormReactive.get('amount_profiles')?.value;

      const body: BodyStreaming = {
        name,
        price_account,
        price_profile,
        amount_profiles,
        idRole: this.role.id,
        imgFile: this.imgFile
      }

      this.streamingService.registerStreaming(body)
        .subscribe( resp => {
          if(resp.ok){
            this.FormReactive.reset();
            this.streamings = [...this.streamings, resp.streaming!]
            this.imgFile = null;
            this.contentImg.classList.add('display-none');
          }
        });

    }else{
      Swal.fire({
        title: 'Informacion',
        icon: 'warning',
        heightAuto: false,
        text: 'Debe seleccionar una image'
      })
    }
  }

  public showPicture(e: Event){
    
    const listFiles = (e.target as HTMLInputElement).files;
    
    if(listFiles){
      const file: File = listFiles[0];
      this.imgFile = file;
      let url: string = '';
      if(file){
        url = URL.createObjectURL( file );
      }
      
      if(this.imgView){
        this.imgView.src = url;
        this.contentImg.classList.remove('display-none');
      }
    }
  }

}
