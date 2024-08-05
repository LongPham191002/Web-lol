import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { StoreService } from './services/store.service';

import { CartComponent } from './component/cart/cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CardComponent } from './component/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CartComponent,
    CheckoutComponent,
    NavbarComponent,
    CardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'first_project';

  constructor(public storeService: StoreService) {}
}
