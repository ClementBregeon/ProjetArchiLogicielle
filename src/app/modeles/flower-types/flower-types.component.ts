import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-flower-types',
  templateUrl: './flower-types.component.html',
  styleUrls: ['./flower-types.component.css']
})
export class FlowerTypesComponent implements OnInit {
  flowerTypes: any[] = [];
  @Input() showDeleteButton: boolean = true;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://pokeapi.co/api/v2/pokemon/')
      .subscribe((response: any) => {
        this.flowerTypes = response.results.map((pokemon: any) => {
          const id = pokemon.url.split('/').slice(-2, -1)[0];
          return {
            name: pokemon.name,
            imageURL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
          };
        });
      });
  }
  onDeleteFlower(index: number) {
    this.flowerTypes.splice(index, 1);
    // Rafraîchir la vue si nécessaire
  }
}