import { Component } from '@angular/core';
import { CalculatorComponent } from '../../components/calculator/calculator.component';
import { InterestListComponent } from '../../components/interest-list/interest-list.component';

@Component({
  selector: 'app-dashboard',
  imports: [CalculatorComponent, InterestListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
