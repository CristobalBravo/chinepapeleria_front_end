import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../../../../services/agenda.service';
import Swal from 'sweetalert2';
import { AgendaModel } from 'src/app/Models/agenda.models';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  agenda= new AgendaModel();
  agendas:any[]=[];

  constructor(private AgendaService:AgendaService) { }

  ngOnInit(): void {

    this.AgendaService.all().subscribe((resp:any)=>{

      this.agendas=resp[2];
    })
  }

  eliminar(idx){
    this.agenda.id=this.agendas[idx].id;

    Swal.fire({
      icon: 'warning',
      title: 'Eliminar Agenda',
      text: '¿Estas seguro que quieres eliminar a '+ this.agendas[idx].producto.nombre+'?',
      showCancelButton:true,
      cancelButtonColor: "#cb3234",
      confirmButtonText: "Sí",
      cancelButtonText: "No"
    }).then(resp=>{
      if(resp.value){
        this.AgendaService.eliminar(this.agenda,localStorage.getItem('token')).subscribe(resp=>{
          console.log(resp);
        });
        this.agendas.splice(idx,1);
      }
    })
  }

}
