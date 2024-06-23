import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroStatusComponent } from './filtro-status.component';

describe('FiltroStatusComponent', () => {
  let component: FiltroStatusComponent;
  let fixture: ComponentFixture<FiltroStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
