import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDepartmentComponent } from './product-department.component';

describe('ProductDepartmentComponent', () => {
  let component: ProductDepartmentComponent;
  let fixture: ComponentFixture<ProductDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDepartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
