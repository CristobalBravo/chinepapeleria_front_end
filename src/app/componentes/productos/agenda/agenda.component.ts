import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../../../services/agenda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  agendas=[];
  agenda:any;
  constructor(private AgendaService:AgendaService,
              private router:Router) { }

  ngOnInit(): void {
    this.AgendaService.all().subscribe((resp:any)=>{
      this.agendas=resp[2];
    })
  }
  verAgenda(idx:number){
    this.agenda = this.agendas[idx];
    this.router.navigate(['agenda/disenar', this.agenda.id]);
  }

}
