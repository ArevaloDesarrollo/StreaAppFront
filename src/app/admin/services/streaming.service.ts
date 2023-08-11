import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StreamingService {

  private urlBase: string = environment.baseUrl; 

  constructor(private http: HttpClient) { }


  registerStreaming(name: string, img: File){

    const url: string =  `${this.urlBase}/streaming`;    

  }


}
