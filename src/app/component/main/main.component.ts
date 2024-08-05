import { Component, Input } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  @Input() items: string[] = [];

  constructor(public storeService: StoreService) {}
}
