import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
searchText:string = "";
//create an Event
@Output()
searchTextChange:EventEmitter<string> = new EventEmitter<string>();
@ViewChild('searchInputRef') searchInputProd:ElementRef
onSearchTextChange(){
  this.searchTextChange.emit(this.searchText);
}
onSearch(event:any){
  return this.searchText = event.target.value;
}
//Template reference
updateSearchText(){
  this.searchText = this.searchInputProd.nativeElement.value;
  this.searchTextChange.emit(this.searchText);
}
}
