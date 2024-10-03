import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-display',
  templateUrl: './price-display.component.html',
  styleUrl: './price-display.component.css',
})
export class PriceDisplayComponent {
  @Input() price: number;
}
