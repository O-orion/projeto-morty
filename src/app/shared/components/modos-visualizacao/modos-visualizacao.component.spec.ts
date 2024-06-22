import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModosVisualizacaoComponent } from './modos-visualizacao.component';

describe('ModosVisualizacaoComponent', () => {
  let component: ModosVisualizacaoComponent;
  let fixture: ComponentFixture<ModosVisualizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModosVisualizacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModosVisualizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
