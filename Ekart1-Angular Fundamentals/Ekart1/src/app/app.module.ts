import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDataListComponent } from './product-data-list/product-data-list.component';
import { SearchComponent } from './product-data-list/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductSubListComponent } from './product-data-list/product-sub-list/product-sub-list.component';
import { SingleProductComponent } from './product-data-list/product-sub-list/single-product/single-product.component';
import { ProductFilterComponent } from './product-data-list/product-sub-list/product-filter/product-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ProductListComponent,
    ProductDataListComponent,
    SearchComponent,
    ProductSubListComponent,
    SingleProductComponent,
    ProductFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule   //in order to use [(ngModel)] for two way data binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
