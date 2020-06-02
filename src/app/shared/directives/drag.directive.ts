import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {

  @HostBinding('draggable') public draggable = true;
  
  constructor() {}

}
