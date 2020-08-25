import { Component, OnInit } from '@angular/core';
import { FlashCardService } from '../../../../services/flash-card.service';

@Component({
  selector: 'app-listar-flashcard',
  templateUrl: './listar-flashcard.component.html',
  styleUrls: ['./listar-flashcard.component.css']
})
export class ListarFlashcardComponent implements OnInit {

  flashcards:any[]=[];
  constructor(private flashcardService:FlashCardService) { }

  ngOnInit(): void {
    this.flashcardService.all().subscribe((resp:any)=>{
      console.log(resp[2]);
      this.flashcards=resp[2];
    })
  }

}
