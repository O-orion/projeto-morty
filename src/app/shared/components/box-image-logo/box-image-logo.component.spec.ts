import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxImageLogoComponent } from './box-image-logo.component';

describe('BoxImageLogoComponent', () => {
  let component: BoxImageLogoComponent;
  let fixture: ComponentFixture<BoxImageLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxImageLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxImageLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
