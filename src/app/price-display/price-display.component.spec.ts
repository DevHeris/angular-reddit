import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceDisplayComponent } from './price-display.component';

describe('PriceDisplayComponent', () => {
  let component: PriceDisplayComponent;
  let fixture: ComponentFixture<PriceDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriceDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
