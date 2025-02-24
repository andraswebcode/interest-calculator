import { Component } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { CalculatorComponent } from "../../components/calculator/calculator.component";

@Component({
  selector: 'app-calculator-page',
  imports: [MenuComponent, CalculatorComponent],
  templateUrl: './calculator-page.component.html',
  styleUrl: './calculator-page.component.scss'
})
export class CalculatorPageComponent {

}
