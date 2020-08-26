import { Component, OnInit } from '@angular/core';
import { PlanificadorService } from '../../../../services/planificador.service';
import Swal from 'sweetalert2';
import { PlanificadorModel } from '../../../../Models/planificador.models';

@Component({
  selector: 'app-listplanificador',
  templateUrl: './listplanificador.component.html',
  styleUrls: ['./listplanificador.component.css']
})
export class ListplanificadorComponent implements OnInit {
  planificador = new PlanificadorModel();
  p:any[]=[];
  constructor(private planificadorService:PlanificadorService) { }

  ngOnInit(): void {
    this.planificadorService.all().subscribe((resp:any)=>{

      this.p=resp[2];
    })
  }
  editar(idx){
    console.log(idx)
  }

  eliminar(idx){
    this.planificador.id=this.p[idx].id;

    Swal.fire({
      icon: 'warning',
      title: 'Eliminar Planificador',
      text: '¿Estas seguro que quieres eliminar a '+ this.p[idx].producto.nombre+'?',
      showCancelButton:true,
      cancelButtonColor: "#cb3234",
      confirmButtonText: "Sí",
      cancelButtonText: "No"
    }).then(resp=>{
      if(resp.value){
        this.planificadorService.eliminar(this.planificador,localStorage.getItem('token')).subscribe(resp=>{
        });
        this.p.splice(idx,1);
      }
    })
  }
}
