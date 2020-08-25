import { Component, OnInit } from '@angular/core';
import { CuadernoService } from '../../../../services/cuaderno.service';
import { CuadernoModel } from '../../../../Models/cuaderno.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-cuaderno',
  templateUrl: './listar-cuaderno.component.html',
  styleUrls: ['./listar-cuaderno.component.css']
})
export class ListarCuadernoComponent implements OnInit {
  cuaderno=new CuadernoModel();
  cuadernos:any[]=[];
  constructor(private cuadernoService:CuadernoService) { }

  ngOnInit(): void {
    this.cuadernoService.all().subscribe((resp:any)=>{
      console.log(resp[2]);
      this.cuadernos=resp[2];
    })
  }
  eliminar(idx){
    this.cuaderno.id=this.cuadernos[idx].id;

    Swal.fire({
      icon: 'warning',
      title: 'Eliminar Cuaderno',
      text: '¿Estas seguro que quieres eliminar a '+ this.cuadernos[idx].producto.nombre+'?',
      showCancelButton:true,
      cancelButtonColor: "#cb3234",
      confirmButtonText: "Sí",
      cancelButtonText: "No"
    }).then(resp=>{
      if(resp.value){
        this.cuadernoService.eliminar(this.cuaderno,localStorage.getItem('token')).subscribe(resp=>{
          console.log(resp);
        });
        this.cuadernos.splice(idx,1);
      }
    })
  }

}
