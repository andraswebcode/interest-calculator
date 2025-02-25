import { Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { DateFormatPipe } from "../../pipes/date-format.pipe";

@Component({
  selector: 'app-interest-item',
  imports: [MatListModule, DateFormatPipe],
  templateUrl: './interest-item.component.html',
  styleUrl: './interest-item.component.scss'
})
export class InterestItemComponent {
  @Input() startDate!: string;
  @Input() endDate!: string;
  @Input() amount!: number;
  @Input() interest!: number;
  @Input() interestAmount!: number;
  @Input() elapsedDays!: number;
}
