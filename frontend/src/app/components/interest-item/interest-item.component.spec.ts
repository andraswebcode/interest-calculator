import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestItemComponent } from './interest-item.component';

describe('InterestItemComponent', () => {
  let component: InterestItemComponent;
  let fixture: ComponentFixture<InterestItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
