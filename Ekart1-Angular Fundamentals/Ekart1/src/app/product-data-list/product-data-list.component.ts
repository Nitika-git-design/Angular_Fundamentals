import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-data-list',
  templateUrl: './product-data-list.component.html',
  styleUrls: ['./product-data-list.component.css']
})
export class ProductDataListComponent {
  searchText:string = "";
  @ViewChild('productListComponent') productListComp : ProductDataListComponent
  setSearchText(value:string){
    this.searchText = value;
  }
}
