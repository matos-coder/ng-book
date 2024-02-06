import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ProductListComponent {
  @Input() productList: Product[];

  @Output() onProductSelected: EventEmitter<Product>;
  private currentProduct: Product;

  constructor() {
    this.productList=[];
    this.onProductSelected = new EventEmitter();
    this.currentProduct=new Product("","","",[],0);
  }

  clicked(product: Product): void {
     this.currentProduct = product;
     this.onProductSelected.emit(product);
  }
  isSelected(product: Product): boolean {
     if (!product || !this.currentProduct) {
     return false;
     }
     return product.sku === this.currentProduct.sku;
     }
}
