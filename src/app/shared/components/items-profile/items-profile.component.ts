import { Component, ComponentFactoryResolver, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { FormProfileComponent } from '../form-profile/form-profile.component';
import Swal from 'sweetalert2';
import { BodyProfile } from 'src/app/admin/interfaces/body-profile';

@Component({
  selector: 'app-items-profile',
  templateUrl: './items-profile.component.html',
  styleUrls: ['./items-profile.component.scss'],
})
export class ItemsProfileComponent  implements OnInit {

  @Input() allowsItems!: number; 
  @ViewChild("contentItems", {read: ViewContainerRef}) content!: ViewContainerRef;
  private itemsAdd: number = 0;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  addFormProfiles(){
    
    if(!this.allowsItems){
      Swal.fire({
        icon: 'info',
        title: 'Advertencia',
        text: 'Debe seleccionar un tipo de cuenta.',
        heightAuto: false,
      });
      return;
    }

    if(this.allowsItems > this.itemsAdd){
      
      const namesProfiles: NodeListOf<HTMLIonInputElement> = document.querySelectorAll('.name_profile');
      const pinProfiles: NodeListOf<HTMLIonInputElement> = document.querySelectorAll('.pin_profile');
      
      let agregar: boolean = true;

      for(let i = 0; i < this.itemsAdd; i++){

        if(namesProfiles[i].value?.toString().trim() === '' || pinProfiles[i].value?.toString().trim().length !== 4){
          agregar = false;
          break;
        }
      }

      if(agregar){
        const component = this.componentFactoryResolver.resolveComponentFactory(FormProfileComponent);
        this.content.createComponent(component);
        this.itemsAdd++;
        
      }else{
        Swal.fire({
          title: 'Advertencia',
          text: 'Debe llenar todos campos agregados y el pin debe tener 4 digitos para agregar otro item de perfil.',
          icon: 'info',
          heightAuto: false,
        });
      }


    }else{
      Swal.fire({
        icon: 'warning',
        title: 'Alerta',
        text: 'Ha agregado los perfiles permitidos para el tipo de cuenta',
        heightAuto: false
      })
    }
    

  }

  

  

}
