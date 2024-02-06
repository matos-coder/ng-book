import { Component, HostBinding, Input } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-image',
  standalone: true,
  imports: [],
  templateUrl: './product-image.component.html',
  styleUrl: './product-image.component.css'
})
export class ProductImageComponent {
  @Input() product: Product;
  @HostBinding ('attr.class') cssClass = 'ui small image';
  constructor() {
    this.product=new Product("","","",[],0);
   }
}
