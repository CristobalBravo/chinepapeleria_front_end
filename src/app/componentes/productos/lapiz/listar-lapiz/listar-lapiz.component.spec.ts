import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLapizComponent } from './listar-lapiz.component';

describe('ListarLapizComponent', () => {
  let component: ListarLapizComponent;
  let fixture: ComponentFixture<ListarLapizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarLapizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarLapizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
