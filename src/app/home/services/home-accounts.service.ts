import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HomeStreamingResponse } from '../interfaces/home-streaming-response';


@Injectable({
  providedIn: 'root'
})
export class HomeAccountsService {

  private urlBase: string = environment.baseUrl;
  
  constructor(
    private http: HttpClient
  ) { }


  public getAccountsActives(): Observable<HomeStreamingResponse>{

    const url: string = `${this.urlBase}streaming/accountsActive`;
    const token: string = localStorage.getItem('token') || '';
    const headers: HttpHeaders = new HttpHeaders().set('token', token);

    return this.http.get<HomeStreamingResponse>(url, {headers})
      .pipe(
        map( resp => resp),
        catchError( err => of( err.error))
      );
    }
    
    public getProfilesActives(): Observable<HomeStreamingResponse>{
      const url: string = `${this.urlBase}streaming/profilesActive`;
      const token: string = localStorage.getItem('token') || '';
      const headers: HttpHeaders = new HttpHeaders().set('token', token);
  
      return this.http.get<HomeStreamingResponse>(url, {headers})
        .pipe(
          map( resp => resp),
          catchError( err => of( err.error))
        );
  }
}
