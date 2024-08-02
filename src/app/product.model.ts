// src/app/models/product.model.ts

export interface Product {
    id: number;
    name: string;
    price: number;
    inStock: number;
    image: string;
    description?: string; // Optional for products that might not have a description
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }
  
  export interface CompletedOrderItem extends CartItem {}
  