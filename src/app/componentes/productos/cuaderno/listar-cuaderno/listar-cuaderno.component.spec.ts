import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCuadernoComponent } from './listar-cuaderno.component';

describe('ListarCuadernoComponent', () => {
  let component: ListarCuadernoComponent;
  let fixture: ComponentFixture<ListarCuadernoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCuadernoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCuadernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
