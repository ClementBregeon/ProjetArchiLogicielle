// navbar.component.ts

import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  link : string = 'https://media.istockphoto.com/id/1171169099/fr/photo/homme-avec-les-bras-crois%C3%A9s-disolement-sur-le-fond-gris.jpg?s=612x612&w=0&k=20&c=csQeB3utGtrGeb3WmdSxRYXaJvUy_xqlhbOIZxclcGA=';
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
    if (this.link == 'https://www.shutterstock.com/image-photo/positive-african-man-beard-looks-260nw-2087618245.jpg') 
    {
      this.link = 'https://media.istockphoto.com/id/1171169099/fr/photo/homme-avec-les-bras-crois%C3%A9s-disolement-sur-le-fond-gris.jpg?s=612x612&w=0&k=20&c=csQeB3utGtrGeb3WmdSxRYXaJvUy_xqlhbOIZxclcGA=';
      this.compte = "user"
    } 
    else
    {
      this.link = 'https://www.shutterstock.com/image-photo/positive-african-man-beard-looks-260nw-2087618245.jpg'
      console.log("image2")
      this.compte = "admin"
    }
    this.router.navigate(['/accueil']);
    this.togglePopup();
  }
}
