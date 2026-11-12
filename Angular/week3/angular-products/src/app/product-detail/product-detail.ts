import { Component, inject, input, numberAttribute } from '@angular/core';
import { ProductsService } from '../services/products-service';

@Component({
  imports: [],
  selector: 'product-detail',
  styleUrl: './product-detail.css',
  templateUrl: './product-detail.html',
})
export class ProductDetail {
  id = input.required({ transform: numberAttribute });
  #productsService = inject(ProductsService);
  productResource = this.#productsService.getProductIdResource(this.id);
}
