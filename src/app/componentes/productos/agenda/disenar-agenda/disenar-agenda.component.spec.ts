import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenarAgendaComponent } from './disenar-agenda.component';

describe('DisenarAgendaComponent', () => {
  let component: DisenarAgendaComponent;
  let fixture: ComponentFixture<DisenarAgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisenarAgendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisenarAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
