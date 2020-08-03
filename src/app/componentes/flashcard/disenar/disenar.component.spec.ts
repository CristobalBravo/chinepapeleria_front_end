import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenarComponent } from './disenar.component';

describe('DisenarComponent', () => {
  let component: DisenarComponent;
  let fixture: ComponentFixture<DisenarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisenarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisenarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
