import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
 product = {
 name:"iphone",
 price: 999,
 color: "Matte Black",
 discount:8.50,
 inStock:0
 }

 getDiscountedPrice(){
  return this.product.price - (this.product.price * this.product.discount /100)
 }
}
