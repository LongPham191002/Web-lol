import { Injectable } from '@angular/core';
import { CartItem, SanPhamModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() {}

  products: SanPhamModel[] = [
    {
      id: 1,
      name: 'Lamborghini Urus S 2024',
      price: 1000000,
      inStock: 10,
      image: 'assets/images/lamborghini-urus-s-2024.jpg',
      description:
        'A luxury SUV with cutting-edge technology and powerful performance.',
    },
    {
      id: 2,
      name: 'Aventador SVJ',
      price: 1500000,
      inStock: 5,
      image: 'assets/images/aventador-svj.jpg',
      description:
        'A high-performance sports car with exceptional speed and design.',
    },
    {
      id: 3,
      name: 'Purosangue Ferrari',
      price: 2000000,
      inStock: 7,
      image: 'assets/images/purosangue-ferrari.jpg',
      description:
        'A stunningly elegant sports car offering unparalleled driving experience.',
    },
  ];
  total: number = 0;
  cart: CartItem[] = [];

  // checkout: any[] = [];

  addToCart(productIndex: number) {
    let findIndex = this.cart.findIndex(
      (element) => element.id == this.products[productIndex].id,
    ); // Đi tìm trong giỏ hàng có tồn tại sp mà mình muốn thêm hay không
    if (findIndex != -1) {
      // Nếu tồn tại (index != -1)
      this.cart[findIndex].quantity++;
      if (this.products[productIndex].inStock == 0) {
        return;
      } else {
        this.products[productIndex].inStock--;
      } // Tăng số lượng lên 1
    } else {
      // Nếu không tồn tại
      this.cart.push(
        // Thêm sp mới đó vào
        <CartItem>{
          ...this.products[productIndex],
          quantity: 1,
        },
      );
      this.products[productIndex].inStock--;
    }
    console.log(this.cart);
  }

  deleteCart(cartItemIndex: number) {
    let productIndex = this.products.findIndex(
      (element) => element.id == this.cart[cartItemIndex].id,
    );

    if (this.cart[cartItemIndex].quantity > 1) {
      this.cart[cartItemIndex].quantity--;
    } else {
      this.cart.splice(cartItemIndex, 1);
    }
    this.products[productIndex].inStock++;
    console.log(this.cart);
  }

  totalCost(): number {
    this.total = 0;
    for (let prod of this.cart) {
      this.total += prod.price * prod.quantity;
    }
    return this.total;
  }
}
