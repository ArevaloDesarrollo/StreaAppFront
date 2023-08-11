import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-streaming',
  templateUrl: './streaming.component.html',
  styleUrls: ['./streaming.component.scss'],
})
export class StreamingComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  registerStreaming(){
    
  }

  showPicture(e: Event){
    
    const listFiles = (e.target as HTMLInputElement).files;
    
    if(listFiles){
      const file = listFiles[0];
      const url = URL.createObjectURL( file );
      const contentImg = document.querySelector('#contentImg');
      const img = contentImg?.querySelector('ion-img');      
      
      if(img){
        img.src = url;
        contentImg?.classList.remove('display-none');
      }

    }

      
    
    
  }

}
