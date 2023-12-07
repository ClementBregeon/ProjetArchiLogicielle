import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-detail-produit',
  templateUrl: './page-detail-produit.component.html',
  styleUrls: ['./page-detail-produit.component.css']
})
export class PageDetailProduitComponent {
  pokemon: any;
  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    // Retrieve the Pokemon details from route parameters
    this.route.queryParams.subscribe(params => {
      this.pokemon = {
        id: params['id'],
        name: params['name'],
        imageURL: params['imageURL']
      };
    });
  }

  onClick() {
    this.router.navigate(['/produits'])
  }
}
