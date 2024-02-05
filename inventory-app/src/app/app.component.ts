import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
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
