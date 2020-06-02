import { Directive, HostBinding, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {

  // récupèrer l'index de l'élément qui est déplacé avec le drag en créant une propriété @Input
  @Input('index') public index;
  // créer un EventEmitter pour transmettre l'index de l'élément draggé à l'index de l'élément sur lequel il est droppé
  @Output() public switch: EventEmitter<{srcIndex: number, dstIndex: number}> = new EventEmitter();

  @HostBinding('draggable') public draggable = true;
  @HostBinding('class.over') public isIn = false;

  @HostListener('dragenter') dragEnter() {
    this.isIn = true;
  }

  @HostListener('dragleave') dragLeave() {
    this.isIn = false;
  }

  // l'objet DataTransfer permet de définir des données dragguée
  // dès le début du drag on a accès à l'index de l'élément draggé
  @HostListener('dragstart', ['$event']) dragstart($event) {
    $event.dataTransfer.setData('srcIndex', this.index);
  }

  // ajout d'une listener permettant de savoir sur élément on droppe l'élément draggé
  // et émettre l'évènement lors du drop
  @HostListener('drop', ['$event']) drop($event) {
    this.isIn = false;
    this.switch.emit({
      srcIndex: +$event.dataTransfer.getData('srcIndex'),
      dstIndex: this.index
    });
  }

  // ajout d'un listener sur la directive pour bloquer le comportement par défaut des navigateurs qui empêche le switch
  @HostListener('dragover', ['$event']) dragOver($event) {
    $event.preventDefault();
  }
  
  constructor() {}

}
