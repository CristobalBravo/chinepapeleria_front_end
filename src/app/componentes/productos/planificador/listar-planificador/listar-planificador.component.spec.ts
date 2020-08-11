import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPlanificadorComponent } from './listar-planificador.component';

describe('ListarPlanificadorComponent', () => {
  let component: ListarPlanificadorComponent;
  let fixture: ComponentFixture<ListarPlanificadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPlanificadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPlanificadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
