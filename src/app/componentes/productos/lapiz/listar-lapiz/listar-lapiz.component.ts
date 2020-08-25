import { Component, OnInit } from '@angular/core';
import { ListarLapizService } from '../../../../services/Lapiz/listar-lapiz.service';
import { LapizModel } from '../../../../Models/lapiz.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listar-lapiz',
  templateUrl: './listar-lapiz.component.html',
  styleUrls: ['./listar-lapiz.component.css']
})
export class ListarLapizComponent implements OnInit {
  lapiz= new LapizModel();
  lapices:any[]=[];
  constructor(private lapizService:ListarLapizService) { }

  ngOnInit(): void {
    this.lapizService.all().subscribe((resp:any)=>{
      console.log(resp[2]);
      this.lapices=resp[2];
    })
  }

  eliminar(idx){
    this.lapiz.id=this.lapices[idx].id;

    Swal.fire({
      icon: 'warning',
      title: 'Eliminar Lápiz',
      text: '¿Estas seguro que quieres eliminar a '+ this.lapices[idx].producto.nombre+'?',
      showCancelButton:true,
      cancelButtonColor: "#cb3234",
      confirmButtonText: "Sí",
      cancelButtonText: "No"
    }).then(resp=>{
      if(resp.value){
        this.lapizService.eliminar(this.lapiz,localStorage.getItem('token')).subscribe(resp=>{
          console.log(resp);
        });
        this.lapices.splice(idx,1);
      }
    })
  }

}
