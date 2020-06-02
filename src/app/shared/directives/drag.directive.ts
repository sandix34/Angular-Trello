import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {

  @HostBinding('draggable') public draggable = true;
  @HostBinding('class.over') public isIn = false;

  @HostListener('dragenter') dragEnter() {
    this.isIn = true;
  }

  @HostListener('dragleave') dragLeave() {
    this.isIn = false;
  }
  
  constructor() {}

}
