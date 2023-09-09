import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { BodyStreaming } from '../interfaces/body-streaming';
import { StreamingResponse } from '../interfaces/streaming-response';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StreamingService {

  private urlBase: string = environment.baseUrl; 

  constructor(private http: HttpClient) { }


  public registerStreaming({
                            name, 
                            imgFile, 
                            idRole,
                            price_profile,
                            price_account,
                            amount_profiles 
                          }: BodyStreaming): Observable<StreamingResponse>{

    const url: string =  `${this.urlBase}streaming`;
    const token: string = localStorage.getItem('token') || '';
    const headers: HttpHeaders = new HttpHeaders().set('token', token);
    
    const formData: FormData = new FormData();
    formData.append('name', name);
    formData.append('streamingImage', imgFile);
    formData.append('price_profile', price_profile.toString());
    formData.append('price_account', price_account.toString());
    formData.append('amount_profiles', amount_profiles.toString());
    formData.append('idRole', idRole);

    return this.http.post<StreamingResponse>(url, formData, {headers})
      .pipe(
        tap( resp => {
          
        }),
        map(resp => resp),
        catchError(err => of(err.error))
      );
  }

  public getStreamings(): Observable<StreamingResponse>{

    const url: string = `${this.urlBase}streaming`;
    const token: string = localStorage.getItem('token') || '';
    const headers: HttpHeaders = new HttpHeaders().set('token', token);

    return this.http.get<StreamingResponse>(url, {headers})
      .pipe(
        map(resp => resp),
        catchError( err => of(err.errror))
      );


  }


}
