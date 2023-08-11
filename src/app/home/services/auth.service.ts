import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { tap, map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';


import { AuthResponse } from 'src/app/auth/interfaces/auth-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlBase: string = environment.baseUrl; 

  constructor(private http: HttpClient) { }

  public loginUser(email: string, password: string): Observable<AuthResponse>{
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
        catchError(err => of(err.error)
        )
      );


  }


}
