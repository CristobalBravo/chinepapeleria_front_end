import { Component, OnInit } from '@angular/core';
import { FlashCardService } from 'src/app/services/flash-card.service';
import { FlashCardModel } from '../../Models/flashcard.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {
  flashCard: FlashCardModel= new FlashCardModel();
  flashCards : any[]=[];

  constructor(private flashCardService: FlashCardService, private router:Router) { }

  ngOnInit(): void {
    this.flashCardService.all().subscribe((resp:any)=>{
      this.flashCards=resp[2];
    })

  }

  DisenarFlashCard(idx:number){
    this.flashCard = this.flashCards[idx];
    this.router.navigate(['flashcard/diseñar', this.flashCard.id]);
  }

}
