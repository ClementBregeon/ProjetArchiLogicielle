// navbar.component.ts

import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  link : string = 'https://upload.wikimedia.org/wikipedia/commons/6/6e/MJK_36859_Friedrich_Liechtenstein_%28Berlinale_2019%29.jpg';
  compte : string = 'user'
  menuItems = [
    { route: '/accueil', label: 'Accueil' },
    { route: '/produits', label: 'Produits' },
    { route: '/panier', label: 'Panier' },
  ];

  popupVisible = false;

  togglePopup(): void {
    this.popupVisible = !this.popupVisible;
  }
  constructor(private router: Router) { }
  onButtonClick() {
    // Logique à exécuter lorsqu'on clique sur le bouton
    if (this.link == 'https://michaelliebert.com/img/bg_gallery-1-49-7457_527.jpg') 
    {
      this.link = 'https://upload.wikimedia.org/wikipedia/commons/6/6e/MJK_36859_Friedrich_Liechtenstein_%28Berlinale_2019%29.jpg';
      this.compte = "user"
    } 
    else
    {
      this.link = 'https://michaelliebert.com/img/bg_gallery-1-49-7457_527.jpg'
      console.log("image2")
      this.compte = "admin"
    }
    this.router.navigate(['/accueil']);
    this.togglePopup();
  }
}
