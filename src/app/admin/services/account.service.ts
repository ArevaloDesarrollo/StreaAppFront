import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BodyAccount } from '../interfaces/body-account';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { AccountResponse } from '../interfaces/account-response';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private urlBase: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  public getAccounts(): Observable<AccountResponse>{

    const url: string = `${this.urlBase}account`;
    const token: string = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().set('token', token);
    
    return this.http.get<AccountResponse>(url, {headers})
      .pipe(
        map(resp => resp),
        catchError( err => of(err.error))
      );

  }


  public registerAccountWithProfiles(data: BodyAccount): Observable<AccountResponse>{
    
    const url: string = `${this.urlBase}account/profiles`;
    const token: string = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().set('token', token);

    console.log(data);
    
    
    return this.http.post<AccountResponse>(url, data, {headers})
      .pipe(
        map(resp => resp),
        catchError( err => of(err.error))
      );


  }

}
