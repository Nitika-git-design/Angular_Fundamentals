import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
searchText:string = "Men's Wear"
onSearch(event:any){
  return this.searchText = event.target.value;
}
}
