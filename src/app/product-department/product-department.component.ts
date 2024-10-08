import { Component, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-department',
  templateUrl: './product-department.component.html',
  styleUrl: './product-department.component.css',
})
export class ProductDepartmentComponent {
  @Input() product: Product;
}
