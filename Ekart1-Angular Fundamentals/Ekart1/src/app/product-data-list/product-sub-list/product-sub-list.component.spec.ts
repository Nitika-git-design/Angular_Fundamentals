import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSubListComponent } from './product-sub-list.component';

describe('ProductSubListComponent', () => {
  let component: ProductSubListComponent;
  let fixture: ComponentFixture<ProductSubListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSubListComponent]
    });
    fixture = TestBed.createComponent(ProductSubListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
