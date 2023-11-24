import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.css'],
})
export class PageAccueilComponent {
  constructor(private router: Router) { }
  onButtonClick() {
    // Logique à exécuter lorsqu'on clique sur le bouton
    this.router.navigate(['/produits']);
  }
}
