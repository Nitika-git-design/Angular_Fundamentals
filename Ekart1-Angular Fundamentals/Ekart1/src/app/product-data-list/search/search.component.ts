import { Component, EventEmitter, Output } from '@angular/core';

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

onSearchTextChange(){
  this.searchTextChange.emit(this.searchText);
}
onSearch(event:any){
  return this.searchText = event.target.value;
}
//Template reference
updateSearchText(inputRef:HTMLInputElement){
  this.searchText = inputRef.value;
  this.searchTextChange.emit(this.searchText);

}
}
