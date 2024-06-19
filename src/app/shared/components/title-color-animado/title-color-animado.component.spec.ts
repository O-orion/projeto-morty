import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleColorAnimadoComponent } from './title-color-animado.component';

describe('TitleColorAnimadoComponent', () => {
  let component: TitleColorAnimadoComponent;
  let fixture: ComponentFixture<TitleColorAnimadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleColorAnimadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleColorAnimadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
