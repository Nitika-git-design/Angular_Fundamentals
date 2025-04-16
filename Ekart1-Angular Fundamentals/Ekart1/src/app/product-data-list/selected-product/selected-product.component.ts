import { Component,Input } from '@angular/core';
import { product } from 'src/app/Modules/product';
import { ProductDataListComponent } from '../product-data-list.component';

@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.css']
})
export class SelectedProductComponent {
  @Input()
    productListComp:ProductDataListComponent = undefined;
}
