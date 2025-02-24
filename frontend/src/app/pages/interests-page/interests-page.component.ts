import { Component } from '@angular/core';
import { InterestListComponent } from "../../components/interest-list/interest-list.component";
import { MenuComponent } from "../../components/menu/menu.component";

@Component({
  selector: 'app-interests-page',
  imports: [InterestListComponent, MenuComponent],
  templateUrl: './interests-page.component.html',
  styleUrl: './interests-page.component.scss'
})
export class InterestsPageComponent {

}
