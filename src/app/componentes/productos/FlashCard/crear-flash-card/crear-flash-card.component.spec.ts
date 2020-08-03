import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFlashCardComponent } from './crear-flash-card.component';

describe('CrearFlashCardComponent', () => {
  let component: CrearFlashCardComponent;
  let fixture: ComponentFixture<CrearFlashCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearFlashCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFlashCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
