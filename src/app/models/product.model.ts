export interface SanPhamModel {
  id: number;
  name: string;
  price: number;
  inStock: number;
  image: string;
  description: string;
}

export interface CartItem extends SanPhamModel {
  quantity: number;
}

export interface CompletedOrderItem extends CartItem {}
