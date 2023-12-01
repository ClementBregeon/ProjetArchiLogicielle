import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css']
})
export class CartIconComponent {
  @Input() itemCount: number;
  constructor() {
    // Initialisez itemCount ici avec une valeur par défaut si nécessaire
    // Par exemple, initialisez-le à zéro.
    this.itemCount = 0;
  }
}
