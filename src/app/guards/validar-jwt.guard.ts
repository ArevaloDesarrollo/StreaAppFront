import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../home/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarJwtGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private router: Router){}

  canActivate(): Observable<boolean> {
    
    return this.authService.validateJWT()
    .pipe(
      tap(ok => {
          if(!ok) {
            this.router.navigateByUrl('/auth');
          }
        }
      )
    )
  }
  canLoad(): Observable<boolean> {
    
    return this.authService.validateJWT()
      .pipe(
        tap(ok => {
          if(!ok){
            this.router.navigateByUrl('/auth');
          }
        })
      );
  }
}
