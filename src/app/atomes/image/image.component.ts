import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  @Input() imageUrl: string;
  @Input() imageAlt: string;
  constructor() {
    this.imageUrl = "";
    this.imageAlt = "";
    
  }
}
