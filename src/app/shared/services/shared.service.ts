import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public patternEmail: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  emptyString(controlForm: FormControl){
    const text: string = controlForm.value.trim();

    if(text === ''){
      return {
        empty: true
      }
    }

    return null;
  }

  existEmail(controlForm: FormControl){
    const email: string = controlForm.value.trim();
    if(email){
      console.log(email);
      
    }
    
    /* const url = `${this.baseUrl}/auth/existEmail/${email}`;
    return this.http.get<Response>(url)
      .pipe(
        tap(resp => {
          console.log(resp);
          
        })
      ); */
  }

}
