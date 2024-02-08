import { CUSTOM_ELEMENTS_SCHEMA, Component , EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Product } from './models/product.model';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppComponent {
  title = 'inventory-app';

  products: Product[];

 constructor() {
  this.products = [
     new Product(
     'MYSHOES',
     'Black Running Shoes',
     '/assets/images/products/black-shoes.jpg',
     ['Men', 'Shoes', 'Running Shoes'],
     109.99),
     new Product(
     'NEATOJACKET',
     'Blue Jacket',
     '/assets/images/products/blue-jacket.jpg',
     ['Women', 'Apparel', 'Jackets & Vests'],
     238.99),
     new Product(
     'NICEHAT',
     'A Nice Black Hat',
     '/assets/images/products/black-hat.jpg',
     ['Men', 'Accessories', 'Hats'],
     29.99)
     ];
    this.products = [];
  }
  productWasSelected(product: Product): void {

    console.log('Product clicked: ', product);
     }

 
}
