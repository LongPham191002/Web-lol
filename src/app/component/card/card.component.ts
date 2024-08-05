import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SanPhamModel } from '../../models/product.model';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() product!: SanPhamModel;
  @Output() addToCartEvent = new EventEmitter<string>();

  constructor(public storeService: StoreService) {}

  addToCart() {
    this.addToCartEvent.emit('add me pls');
  }
}
