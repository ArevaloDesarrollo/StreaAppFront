import { Component, Input, OnInit } from '@angular/core';
import { Account } from 'src/app/admin/interfaces/account';

@Component({
  selector: 'app-modal-accounts',
  templateUrl: './modal-accounts.component.html',
  styleUrls: ['./modal-accounts.component.scss'],
})
export class ModalAccountsComponent  implements OnInit {

  @Input() account: Account = {};

  constructor() { }

  ngOnInit() {}


}
