import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGoTopComponent } from './button-go-top.component';

describe('ButtonGoTopComponent', () => {
  let component: ButtonGoTopComponent;
  let fixture: ComponentFixture<ButtonGoTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonGoTopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonGoTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
