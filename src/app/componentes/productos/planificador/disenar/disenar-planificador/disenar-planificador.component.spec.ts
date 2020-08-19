import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenarPlanificadorComponent } from './disenar-planificador.component';

describe('DisenarPlanificadorComponent', () => {
  let component: DisenarPlanificadorComponent;
  let fixture: ComponentFixture<DisenarPlanificadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisenarPlanificadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisenarPlanificadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
