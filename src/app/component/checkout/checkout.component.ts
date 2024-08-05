import { Component, Input } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  constructor(public storeService: StoreService) {}
}
