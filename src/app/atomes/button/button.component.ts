import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() name: string;
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  constructor(private modalService: NgbModal) {
    this.name = "";
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  handleClick() {
    this.buttonClick.emit();
  }
}
