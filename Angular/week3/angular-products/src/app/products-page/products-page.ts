import { Component, computed, inject, linkedSignal, signal } from '@angular/core';
import { Product } from '../interfaces/product';
import { FormsModule } from '@angular/forms';
import { ProductItem } from '../product-item/product-item';
import { ProductForm } from '../product-form/product-form';
import { ProductsService } from '../services/products-service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'products-page',
  imports: [FormsModule, ProductItem, ProductForm],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css'
})
export class ProductsPage {
  title = 'Mi lista de productos';
  showImage = signal(true);
  search = signal('');
  fileName = '';

  filteredProducts = computed(() => {
    return this.search()
      ? this.products().filter((p) =>
          p.description.toLowerCase().includes(this.search().toLowerCase())
        )
      : this.products();
  });
  #productsService = inject(ProductsService); // Inyectamos el servicio
  readonly productsResource = this.#productsService.productsResource;
  products = linkedSignal(() => this.productsResource.value().products);

  constructor() {
    console.log("hola");
  }
  
  toggleImage() {
    this.showImage.update((show) => !show);
  }

  addProduct(product: Product) {    
    this.products.update((products) => [...products, product]);
  }
  
  deleteProduct(product: Product) {
    this.products.update(products => products.filter(p => p !== product));
  }
}

