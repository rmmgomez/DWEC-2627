import { Component, input, output } from '@angular/core';
import { IntlCurrencyPipe } from '../pipes/intl-currency-pipe';
import { Product } from '../interfaces/product';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { StarRating } from '../star-rating/star-rating';

@Component({
  imports: [IntlCurrencyPipe, DatePipe, UpperCasePipe, StarRating],
  selector: 'product-item',
  styleUrl: './product-item.css',
  templateUrl: './product-item.html',
})
export class ProductItem {
  showImage = input(true);
  product = input.required<Product>(); // required (obligatorio)
  deleted = output<void>();


  deleteProduct() {
    this.deleted.emit(); // Lanzamos el evento
  }
}
