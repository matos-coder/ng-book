import { Component, Input  } from '@angular/core';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-department',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-department.component.html',
  styleUrl: './product-department.component.css'
})
export class ProductDepartmentComponent {
  @Input() product: Product;
  constructor() {
    this.product=new Product("","","",[],0);
   }
}
