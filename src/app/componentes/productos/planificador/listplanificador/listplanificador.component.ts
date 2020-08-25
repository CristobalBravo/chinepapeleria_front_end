import { Component, OnInit } from '@angular/core';
import { PlanificadorService } from '../../../../services/planificador.service';

@Component({
  selector: 'app-listplanificador',
  templateUrl: './listplanificador.component.html',
  styleUrls: ['./listplanificador.component.css']
})
export class ListplanificadorComponent implements OnInit {
 planificadores:any[]=[];
  constructor(private planificadorService:PlanificadorService) { }

  ngOnInit(): void {
    this.planificadorService.all().subscribe((resp:any)=>{

      this.planificadores=resp[2];
      console.log(this.planificadores);
    })
  }

}
