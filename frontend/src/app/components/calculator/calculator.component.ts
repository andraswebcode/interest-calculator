import { Component } from '@angular/core';
import { InterestCalculatorService } from '../../services/interest-calculator.service';
import { MatDatepickerModule, MatDateRangeInput } from '@angular/material/datepicker';

@Component({
  selector: 'app-calculator',
  imports: [MatDatepickerModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  startDate: string = '';
  endDate: string = '';
  amount: number = 0;

  constructor(
    private readonly icService: InterestCalculatorService
  ){}
}
