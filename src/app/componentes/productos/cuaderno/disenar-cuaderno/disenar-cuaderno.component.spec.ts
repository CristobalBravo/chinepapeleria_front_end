import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenarCuadernoComponent } from './disenar-cuaderno.component';

describe('DisenarCuadernoComponent', () => {
  let component: DisenarCuadernoComponent;
  let fixture: ComponentFixture<DisenarCuadernoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisenarCuadernoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisenarCuadernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
