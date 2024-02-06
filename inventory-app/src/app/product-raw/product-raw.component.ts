import { CUSTOM_ELEMENTS_SCHEMA, Component, HostBinding, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { PriceDisplayComponent } from '../price-display/price-display.component';

@Component({
  selector: 'app-product-raw',
  standalone: true,
  imports: [PriceDisplayComponent],
  templateUrl: './product-raw.component.html',
  styleUrl: './product-raw.component.css',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ProductRawComponent {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'item';

  constructor() {
    this.product=new Product("","","",[],0);
  }
}
