import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadernoComponent } from './cuaderno.component';

describe('CuadernoComponent', () => {
  let component: CuadernoComponent;
  let fixture: ComponentFixture<CuadernoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuadernoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
