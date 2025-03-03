import { Component, OnInit } from '@angular/core';
import { Product } from '../../product.model';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from '../../products';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.params['id']);
    this.product = PRODUCTS.find((p) => p.id === productId);
  }
  onAddToCart() {
    if (this.product) this.cartService.addToCart(this.product);
  }
}
