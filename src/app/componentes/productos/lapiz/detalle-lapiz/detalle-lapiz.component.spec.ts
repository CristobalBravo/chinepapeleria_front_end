import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleLapizComponent } from './detalle-lapiz.component';

describe('DetalleLapizComponent', () => {
  let component: DetalleLapizComponent;
  let fixture: ComponentFixture<DetalleLapizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleLapizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleLapizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
