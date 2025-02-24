import { Component, OnInit } from '@angular/core';
import { InterestCalculatorService } from '../../services/interest-calculator.service';
import { MatList } from '@angular/material/list';
import { InterestItemComponent } from '../interest-item/interest-item.component';
import { Interest } from '../../types/interest';
import { tap } from 'rxjs';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-interest-list',
  imports: [MatCardModule, MatList, InterestItemComponent],
  templateUrl: './interest-list.component.html',
  styleUrl: './interest-list.component.scss'
})
export class InterestListComponent implements OnInit {
  interestList:Interest[] = [];

  constructor(
    private readonly icService: InterestCalculatorService
  ){}

  ngOnInit(): void {
    this.icService.getInterests().pipe(
      tap(items => this.interestList = items)
    ).subscribe();
  }
}
