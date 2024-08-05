import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem, SanPhamModel } from '../../models/product.model';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  @Input() product!: CartItem;
  @Output() deleteEvent = new EventEmitter<string>();

  constructor(public storeService: StoreService) {}

  deleteItem() {
    this.deleteEvent.emit('Pls del me');
  }
}
