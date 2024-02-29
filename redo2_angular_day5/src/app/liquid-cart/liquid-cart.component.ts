import { Component } from '@angular/core';
import { Liquid } from '../shared/interface/liquid.interface';
import { LiquidService } from '../shared/service/liquid.service';

@Component({
  selector: 'app-liquid-cart',
  templateUrl: './liquid-cart.component.html',
  styleUrl: './liquid-cart.component.scss',
})
export class LiquidCartComponent {
  cartProduct: { products: Liquid; quantity: number }[] = [];

  constructor(private cartService: LiquidService) {}

  ngOnInit(): void {
    this.cartService.cartProduct$.subscribe((product) => {
      this.cartProduct = product;
    });
  }

  removeLiquidFromCart(product: { products: Liquid; quantity: number }): void {
    this.cartService.removeFromCart(product);
  }

  addLiquidToCart(product: Liquid): void {
    this.cartService.addToCart(product);
  }

  decreaseLiquidQuantity(product: {
    products: Liquid;
    quantity: number;
  }): void {
    this.cartService.decreaseQuantity(product);
  }

  getTotalPrice(): number {
    return this.cartProduct.reduce(
      (total, product) => total + product.products.price * product.quantity,
      0
    );
  }
}
