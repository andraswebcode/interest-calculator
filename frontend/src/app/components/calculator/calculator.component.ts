import { Component } from '@angular/core';
import { InterestCalculatorService } from '../../services/interest-calculator.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { tap } from 'rxjs';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-calculator',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCardModule
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  startDate: string = '';
  endDate: string = '';
  amount: number = 0;

  interest: number = 0;

  constructor(
    private readonly icService: InterestCalculatorService
  ){}

  onSubmit(){
    this.icService.calcInterest({
      start_date:this.startDate,
      end_date:this.endDate,
      amount:this.amount
    }).pipe(
      tap(data => {
        this.interest = data.interest;
      })
    ).subscribe();
  }
}
