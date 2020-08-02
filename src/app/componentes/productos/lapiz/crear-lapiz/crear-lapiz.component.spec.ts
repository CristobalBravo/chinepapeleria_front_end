import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearLapizComponent } from './crear-lapiz.component';

describe('CrearLapizComponent', () => {
  let component: CrearLapizComponent;
  let fixture: ComponentFixture<CrearLapizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearLapizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearLapizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
