import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../product.model';
import { PRODUCTS } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  imports: [RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Product[] = PRODUCTS;
  constructor(private cartService: CartService) {}

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    // alert(`${product.name} added to cart!`);
  }
}
