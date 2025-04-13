import { Component } from '@angular/core';
import { product } from 'src/app/Modules/product';

@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.css']
})
export class SelectedProductComponent {
product:product;
}
