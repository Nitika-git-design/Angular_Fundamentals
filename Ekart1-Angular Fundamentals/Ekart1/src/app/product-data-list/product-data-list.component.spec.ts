import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDataListComponent } from './product-data-list.component';

describe('ProductDataListComponent', () => {
  let component: ProductDataListComponent;
  let fixture: ComponentFixture<ProductDataListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDataListComponent]
    });
    fixture = TestBed.createComponent(ProductDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
