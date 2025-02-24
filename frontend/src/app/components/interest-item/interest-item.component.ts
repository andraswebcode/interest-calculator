import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-interest-item',
  imports: [],
  templateUrl: './interest-item.component.html',
  styleUrl: './interest-item.component.scss'
})
export class InterestItemComponent {
  @Input() startDate!: string;
  @Input() endDate!: string;
  @Input() amount!: number;
  @Input() interest!: number;
}
