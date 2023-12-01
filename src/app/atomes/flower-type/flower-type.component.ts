import { Component, Input, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-flower-type',
  templateUrl: './flower-type.component.html',
  styleUrls: ['./flower-type.component.css']
})
export class FlowerTypeComponent {
  @Input() pokemon: any;
  @Input() type: string;
  @Input() index: number; 
  @Input() showDeleteButton: boolean;
  @Output() deleteClick: EventEmitter<number> = new EventEmitter<number>();
  constructor() {
    // Initialisez itemCount ici avec une valeur par défaut si nécessaire
    // Par exemple, initialisez-le à zéro.
    this.type = "";
    this.index = 1;
    this.showDeleteButton = false;
  }
  onButtonClick() {
    // Logique à exécuter lorsqu'on clique sur le bouton
    this.deleteClick.emit(this.index);
  }
}
