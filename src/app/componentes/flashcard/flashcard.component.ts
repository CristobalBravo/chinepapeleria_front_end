import { Component, OnInit } from '@angular/core';
import { FlashCardService } from 'src/app/services/flash-card.service';
import { FlashCardModel } from '../../Models/flashcard.models';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {
  flashCard: FlashCardModel= new FlashCardModel();
  flashCards : any[]=[];

  constructor(private flashCardService: FlashCardService) { }

  ngOnInit(): void {
    this.flashCardService.all().subscribe((resp:any)=>{
      this.flashCards=resp[2];
      console.log(resp);
    })

  }

}
