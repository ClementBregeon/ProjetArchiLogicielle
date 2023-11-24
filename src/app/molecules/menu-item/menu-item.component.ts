import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  @Input() item: { route: string, label: string };
  constructor() {
    // Initialisez itemCount ici avec une valeur par défaut si nécessaire
    // Par exemple, initialisez-le à zéro.
    this.item = { route: '', label: '' };
  }
}
