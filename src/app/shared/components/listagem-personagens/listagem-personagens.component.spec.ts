import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPersonagensComponent } from './listagem-personagens.component';

describe('ListagemPersonagensComponent', () => {
  let component: ListagemPersonagensComponent;
  let fixture: ComponentFixture<ListagemPersonagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemPersonagensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemPersonagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
