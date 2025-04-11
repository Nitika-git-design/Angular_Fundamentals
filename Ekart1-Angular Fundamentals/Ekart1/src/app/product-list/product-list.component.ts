import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
 addToCart:number =0;
 name:string = "Nitika";
 designation :string = "developer"
 product = {
 name:"iphone",
 price: 999,
 color: "Matte Black",
 discount:8.50,
 inStock:9
 }

 getDiscountedPrice(){
  return this.product.price - (this.product.price * this.product.discount /100)
 }
 onDesignationChange(event:any){
  this.designation = event.target.value;
 }
 onDecrement(){
  if(this.addToCart > 0)
  this.addToCart--;
 }
 onIncrement(){
  if(this.addToCart <= this.product.inStock)
  this.addToCart++;
 }
}
