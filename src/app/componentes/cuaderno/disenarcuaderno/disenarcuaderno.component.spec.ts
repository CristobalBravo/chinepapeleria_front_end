import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenarcuadernoComponent } from './disenarcuaderno.component';

describe('DisenarcuadernoComponent', () => {
  let component: DisenarcuadernoComponent;
  let fixture: ComponentFixture<DisenarcuadernoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisenarcuadernoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisenarcuadernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
