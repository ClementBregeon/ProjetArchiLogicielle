import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flower-type-list',
  templateUrl: './flower-type-list.component.html',
  styleUrls: ['./flower-type-list.component.css']
})
export class FlowerTypeListComponent {
  @Input() types: string[];
  constructor() {
    // Initialisez itemCount ici avec une valeur par défaut si nécessaire
    // Par exemple, initialisez-le à zéro.
    this.types = [];
    
  }
}
