import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent {
@Input()
all:number =0;
@Input()
in_stock:number = 0;
@Input()
out_stock:number=0;
@Output()
selectedFilterButtons:EventEmitter<string> = new EventEmitter<string>();
selectedFilterButton:string = "All";
selectedFilterButtonOnChange(){
  this.selectedFilterButtons.emit(this.selectedFilterButton);
}
}
