import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  constructor(
    private menuController: MenuController,
    private router: Router,
  ) { }

  ngOnInit() {}

  closeMenu(): void{
    this.menuController.close();
  }
  
  goToHome(): void{
    this.router.navigateByUrl('/home');
    this.menuController.close();
  }

}
