import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router) {
    // Initialisez itemCount ici avec une valeur par défaut si nécessaire
    // Par exemple, initialisez-le à zéro.
    this.type = "";
    this.index = 1;
    this.showDeleteButton = false;
  }
  onProductClick() {
      this.router.navigate(['/product', this.pokemon.id], {
        queryParams: { id: this.pokemon.id, name: this.pokemon.name, imageURL: this.pokemon.imageURL, desc: this.pokemon.desc }
      });
  }

  onButtonClick() {
    // Logique à exécuter lorsqu'on clique sur le bouton
    this.deleteClick.emit(this.index);
  }
}
