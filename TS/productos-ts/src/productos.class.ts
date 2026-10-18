import { Http } from './http.class.js';
import { SERVER } from './constants.js';
import type { Product } from './interfaces/product.js';
import type { ProductsResponse, SingleProductResponse } from './interfaces/responses.js';

export class ProductoService {
  #http;
  constructor() {
    this.#http = new Http();
  }

  async getProductos(): Promise<Product[]> {
    const resp = await this.#http.get<ProductsResponse>(`${SERVER}/products`);
    return resp.products;
  } 

  async add(product: Product): Promise<Product> {
    const resp = await this.#http.post<SingleProductResponse, Product>(`${SERVER}/products`, product);
    return resp.product;
  }

  async update(product: Product): Promise<Product> {
    const resp = await this.#http.put<SingleProductResponse, Product>(`${SERVER}/products/${product.id}`, product);
    return resp.product;
  }

  delete(id: number): Promise<void> {
    return this.#http.delete(`${SERVER}/products/${id}`);
  }
}