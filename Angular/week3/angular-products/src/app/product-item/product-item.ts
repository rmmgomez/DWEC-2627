import { ChangeDetectorRef, Component, DestroyRef, inject, input, output } from '@angular/core';
import { IntlCurrencyPipe } from '../pipes/intl-currency-pipe';
import { Product } from '../interfaces/product';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { StarRating } from '../star-rating/star-rating';
import { ProductsService } from '../services/products-service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
  #productsService = inject(ProductsService);
  #changeDetector = inject(ChangeDetectorRef);
  #destroyRef = inject(DestroyRef);

  changeRating(rating: number) {
    const oldRating = this.product().rating; // Guardamos puntuación actual
    this.product().rating = rating; // Modificamos antes de la llamada
    this.#productsService
      .changeRating(this.product().id!, rating)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        error: () => { // Ha habido un error (puntuación no cambiada en el servidor)
          this.product().rating = oldRating; // Restauramos puntuación
          this.#changeDetector.markForCheck(); // Detectar cambio
        },
      });
  }
  deleteProduct() {
    this.#productsService
      .deleteProduct(this.product().id!)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe(() => this.deleted.emit());
  }
}
