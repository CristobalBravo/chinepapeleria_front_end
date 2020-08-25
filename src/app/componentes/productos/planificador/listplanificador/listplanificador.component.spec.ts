import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListplanificadorComponent } from './listplanificador.component';

describe('ListplanificadorComponent', () => {
  let component: ListplanificadorComponent;
  let fixture: ComponentFixture<ListplanificadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListplanificadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListplanificadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
