import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInfoTextComponent } from './card-info-text.component';

describe('CardInfoTextComponent', () => {
  let component: CardInfoTextComponent;
  let fixture: ComponentFixture<CardInfoTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardInfoTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardInfoTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
