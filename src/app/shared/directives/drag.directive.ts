import { Directive, HostBinding, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {

  // récupèrer l'index de l'élément qui est déplacé avec le drag en créant une propriété @Input
  @Input('itemIndex') public itemIndex;
  @Input('listIndex') public listIndex;
  // créer un EventEmitter pour transmettre l'index de l'élément draggé à l'index de l'élément sur lequel il est droppé
  @Output() public switch: EventEmitter<{
    src: {
      itemIndex: number,
      listIndex: number
    },
    dst: {
      itemIndex: number,
      listIndex: number
    }
  }> = new EventEmitter();

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
    $event.dataTransfer.setData('itemIndex', this.itemIndex);
    $event.dataTransfer.setData('listIndex', this.listIndex);
  }

  // ajout d'une listener permettant de savoir sur élément on droppe l'élément draggé
  // et émettre l'évènement lors du drop
  @HostListener('drop', ['$event']) drop($event) {
    this.isIn = false;
    this.switch.emit({
      src: {
        itemIndex: $event.dataTransfer.getData('itemIndex'),
        listIndex: $event.dataTransfer.getData('listIndex')
      },
      dst: {
        itemIndex: this.itemIndex,
        listIndex: this.listIndex
      }
    });
  }

  // ajout d'un listener sur la directive pour bloquer le comportement par défaut des navigateurs qui empêche le switch
  @HostListener('dragover', ['$event']) dragOver($event) {
    $event.preventDefault();
  }
  
  constructor() {}

}
