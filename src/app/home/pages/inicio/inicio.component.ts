import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/auth/interfaces/user';
import { AuthService } from '../../services/auth.service';
import { Person } from 'src/app/auth/interfaces/person';
import { Role } from 'src/app/auth/interfaces/role';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent  implements OnInit {

  public user!: User;
  public person!: Person;
  public role!: Role;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = {...this.authService.user};
    this.person = {...this.user?.person};
    this.role = {...this.user?.role};
  }

}
