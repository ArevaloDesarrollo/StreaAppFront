import { Component, Input, OnInit } from '@angular/core';

import { Account } from 'src/app/admin/interfaces/account';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.scss'],
})
export class ListAccountsComponent  implements OnInit {

  @Input() listAccounts: Account[] = [];

  public isOpenModal: boolean = false;
  private modalAccount!: HTMLIonModalElement;

  public acccountModal: Account = {};

  constructor() { }

  ngOnInit() {
    this.modalAccount = document.querySelector('#modalAccunts')!;
  }


  presentModal(it: number){
    this.acccountModal = {...this.listAccounts[it]}
    this.modalAccount.present();
  }

}
