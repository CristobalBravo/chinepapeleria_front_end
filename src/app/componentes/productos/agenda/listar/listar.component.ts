import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../../../../services/agenda.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  agendas:any[]=[];

  constructor(private AgendaService:AgendaService) { }

  ngOnInit(): void {

    this.AgendaService.all().subscribe((resp:any)=>{

      this.agendas=resp[2];
    })
  }

}
