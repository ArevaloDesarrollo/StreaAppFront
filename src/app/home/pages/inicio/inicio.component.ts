import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/auth/interfaces/user';
import { AuthService } from '../../services/auth.service';
import { Person } from 'src/app/auth/interfaces/person';
import { Role } from 'src/app/auth/interfaces/role';
import { HomeAccountsService } from '../../services/home-accounts.service';
import { HomeStreaming } from '../../interfaces/home-streaming';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent  implements OnInit {

  public user!: User;
  public person!: Person;
  public role!: Role;

  public streamings!: HomeStreaming[];
  public streamingsProfiles!: HomeStreaming[];

  public styleAccounts: string = '';
  public styleProfiles: string = '';

  constructor(
    private authService: AuthService,
    private homeAccountsService: HomeAccountsService,
  ) { }

  ngOnInit() {
    this.user = {...this.authService.user};
    this.person = {...this.user?.person};
    this.role = {...this.user?.role};

    this.homeAccountsService.getAccountsActives()
      .subscribe(resp => {
        if(resp.ok){
          this.streamings = [...resp.streamings];
          this.styleAccounts = '--cantidad-items: ' + this.streamings.length;
        }
      });

    this.homeAccountsService.getProfilesActives()
      .subscribe( resp => {
        if(resp.ok){
          this.streamingsProfiles = [...resp.streamings];
          this.styleProfiles = '--cantidad-items: ' + this.streamingsProfiles.length;
        }
      });
  }

}
