import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-display',
  standalone: true,
  imports: [],
  templateUrl: './price-display.component.html',
  styleUrl: './price-display.component.css'
})
export class PriceDisplayComponent {
  @Input() price: number;
  constructor() {
    this.price=0;
  }
}
