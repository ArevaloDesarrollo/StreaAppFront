import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { tap, map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

import { AuthResponse } from 'src/app/auth/interfaces/auth-response';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/auth/interfaces/user';
import { BodyLogin } from 'src/app/auth/interfaces/body-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlBase: string = environment.baseUrl; 
  private _user!: User;

  get user(){
    return {...this._user};
  }

  constructor(private http: HttpClient) { }

  public loginUser({email, password}: BodyLogin): Observable<AuthResponse>{
    const url: string = `${this.urlBase}auth/login`;
    const body = {email, password};
    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap( resp => {
          if( resp.ok ){
            localStorage.setItem('token', resp.token!);
          }
        }),
        map( resp => resp ),
        catchError(err => of(err.error))
      );
  }

  public validateJWT(): Observable<boolean>{

    const url: string = `${this.urlBase}auth/revalidateJWT`;
    const token: string = localStorage.getItem('token') || '';
    const headers: HttpHeaders = new HttpHeaders().set('token', token);

    return this.http.get<AuthResponse>(url, {headers})
      .pipe(
        map( resp => {
          if(resp.ok){
            localStorage.setItem('token', resp.token!);
            this._user = {...resp.user!};
          }
          return resp.ok;
        }),
        catchError( err => of(false))
      );
  }


}
