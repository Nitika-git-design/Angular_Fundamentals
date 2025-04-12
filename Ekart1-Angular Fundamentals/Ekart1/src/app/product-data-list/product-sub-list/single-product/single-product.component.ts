import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent {
  @Input()
  product:{
    id: number,
      name: string,
      description:string,
      brand: string,
      gender: string,
      category: string,
      size: number[],
      color: string[],
      price: number,
      discountPrice?:number,
      is_in_inventory: boolean,
      items_left: number,
      imageURL:string,
      slug: string
  } 
}
