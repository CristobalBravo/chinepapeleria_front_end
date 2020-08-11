import { Component, OnInit } from '@angular/core';
import { PlanificadorService } from 'src/app/services/planificador.service';

@Component({
  selector: 'app-listar-planificador',
  templateUrl: './listar-planificador.component.html',
  styleUrls: ['./listar-planificador.component.css']
})
export class ListarPlanificadorComponent implements OnInit {

  planificadores:any[]=[];

  constructor(private planificadoresService:PlanificadorService) { }

  ngOnInit(): void {

    this.planificadoresService.all().subscribe(resp=>{ console.log(resp);this.planificadores=resp[2]});

    console.log(this.planificadores);
  }

}
