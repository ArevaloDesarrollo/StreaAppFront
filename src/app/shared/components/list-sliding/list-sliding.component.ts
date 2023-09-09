import { Component, Input, OnInit } from '@angular/core';
import { Streaming } from 'src/app/admin/interfaces/streaming';

@Component({
  selector: 'app-list-sliding',
  templateUrl: './list-sliding.component.html',
  styleUrls: ['./list-sliding.component.scss'],
})
export class ListSlidingComponent  implements OnInit {

  @Input() listStreamings: Streaming[] = [];

  constructor() { }

  ngOnInit() {}

}
