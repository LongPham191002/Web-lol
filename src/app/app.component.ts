import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { Product, CartItem, CompletedOrderItem } from './product.model'; // Adjust the path as necessary

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'first_project';

  products: Product[] = [
    {
      id: 1,
      name: 'Lamborghini Urus S 2024',
      price: 1000000,
      inStock: 10,
      image: 'assets/images/lamborghini-urus-s-2024.jpg',
      description: 'A luxury SUV with cutting-edge technology and powerful performance.'
    },
    {
      id: 2,
      name: 'Aventador SVJ',
      price: 1500000,
      inStock: 5,
      image: 'assets/images/aventador-svj.jpg',
      description: 'A high-performance sports car with exceptional speed and design.'
    },
    {
      id: 3,
      name: 'Purosangue Ferrari',
      price: 2000000,
      inStock: 7,
      image: 'assets/images/purosangue-ferrari.jpg',
      description: 'A stunningly elegant sports car offering unparalleled driving experience.'
    },
  ];

  cart: CartItem[] = [];
  completedOrder: CompletedOrderItem[] = [];
  selectedProduct: Product | null = null;

  addToCart(index: number) {
    const product = this.products[index];
    const findIndex = this.cart.findIndex((item) => item.id === product.id);
    
    if (findIndex !== -1) {
      if (product.inStock > 0) {
        this.cart[findIndex].quantity += 1;
        product.inStock--;
      }
    } else {
      if (product.inStock > 0) {
        this.cart.push({
          ...product,
          quantity: 1,
        });
        product.inStock--;
      }
    }
  }

  removeFromCart(index: number) {
    const cartItem = this.cart[index];
    const product = this.products.find((item) => item.id === cartItem.id);

    if (cartItem.quantity > 1) {
      cartItem.quantity -= 1;
      if (product) product.inStock++;
    } else {
      if (product) product.inStock += cartItem.quantity;
      this.cart.splice(index, 1);
    }
  }

  checkout() {
    this.completedOrder = [...this.cart];
    this.cart = [];
  }

  getTotalPrice() {
    return this.completedOrder.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  showProductDetails(product: Product) {
    this.selectedProduct = product;
  }
}
