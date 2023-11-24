import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.css']
})
export class NavLinkComponent {
  @Input() route: string;
  @Input() label: string;
  constructor() {
    // Initialisez itemCount ici avec une valeur par défaut si nécessaire
    // Par exemple, initialisez-le à zéro.
    this.route = "";
    this.label = "";
    
  }
}
