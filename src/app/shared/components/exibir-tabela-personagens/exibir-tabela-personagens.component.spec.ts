import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirTabelaPersonagensComponent } from './exibir-tabela-personagens.component';

describe('ExibirTabelaPersonagensComponent', () => {
  let component: ExibirTabelaPersonagensComponent;
  let fixture: ComponentFixture<ExibirTabelaPersonagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExibirTabelaPersonagensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibirTabelaPersonagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
