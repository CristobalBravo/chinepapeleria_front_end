import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LapizComponent } from './lapiz.component';

describe('LapizComponent', () => {
  let component: LapizComponent;
  let fixture: ComponentFixture<LapizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LapizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LapizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
