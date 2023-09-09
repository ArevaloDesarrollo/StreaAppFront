import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDinamycComponent]'
})
export class DinamycComponentDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
