import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlashCardService } from '../../../services/flash-card.service';
import { FlashCardModel } from '../../../Models/flashcard.models';
import { TipoLineaService } from '../../../services/tipo-linea.service';
import { ConfiguracionFlashCardModel } from '../../../Models/ConfiguracionFlashCard.model';
import { DisenoModel } from 'src/app/Models/diseno.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-disenar',
  templateUrl: './disenar.component.html',
  styleUrls: ['./disenar.component.css']
})
export class DisenarComponent implements OnInit {
  configuracionFlashCard:ConfiguracionFlashCardModel= new ConfiguracionFlashCardModel();
  diseno:DisenoModel= new DisenoModel();
  flashcard:any;
  tipoLineas:[]=[];
  constructor(private route:ActivatedRoute, private flashCardService:FlashCardService, private tipoLineService:TipoLineaService) { }

  ngOnInit(): void {
    this.route.params.subscribe(id=>{
      this.flashCardService.buscarPorId(id).subscribe((resp:any)=>{
        console.log(resp.flashCard);
        this.flashcard=resp.flashCard;
        console.log(this.flashcard);
      });
    });
    this.tipoLineService.all().subscribe(resp=>{
      this.tipoLineas=resp[2];
    });
  }

  guardar(form:NgForm){
    if(form.invalid){
      console.log('formulario invalido');
    }
    console.log(this.diseno);
    console.log(this.configuracionFlashCard);
  }

}
