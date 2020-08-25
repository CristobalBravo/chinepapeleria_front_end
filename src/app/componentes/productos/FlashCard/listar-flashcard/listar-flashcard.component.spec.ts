import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFlashcardComponent } from './listar-flashcard.component';

describe('ListarFlashcardComponent', () => {
  let component: ListarFlashcardComponent;
  let fixture: ComponentFixture<ListarFlashcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarFlashcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarFlashcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
