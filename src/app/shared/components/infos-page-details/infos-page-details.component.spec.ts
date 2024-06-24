import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosPageDetailsComponent } from './infos-page-details.component';

describe('InfosPageDetailsComponent', () => {
  let component: InfosPageDetailsComponent;
  let fixture: ComponentFixture<InfosPageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfosPageDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfosPageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
