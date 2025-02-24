import { Component } from '@angular/core';
import { InterestCalculatorService } from '../../services/interest-calculator.service';
import { MatList } from '@angular/material/list';
import { InterestItemComponent } from '../interest-item/interest-item.component';
import { Interest } from '../../types/interest';

@Component({
  selector: 'app-interest-list',
  imports: [MatList, InterestItemComponent],
  templateUrl: './interest-list.component.html',
  styleUrl: './interest-list.component.scss'
})
export class InterestListComponent {
  interestList:Interest[] = [];

  constructor(
    private readonly icService: InterestCalculatorService
  ){}
}
