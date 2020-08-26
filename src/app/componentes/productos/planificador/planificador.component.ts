import { Component, OnInit } from '@angular/core';
import { DetallePedidoModel } from '../../../Models/detallePedido.model';
import { PlanificadorService } from '../../../services/planificador.service';
import { Router } from '@angular/router';
import { DetallePedidoService } from '../../../services/detalle-pedido.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { ListarProductoService } from '../../../services/Producto/listar-producto.service';
import { ListarTipoHojasService } from '../../../services/listar-tipo-hojas.service';
import { ListarTamanioHojasService } from 'src/app/services/listar-tamanio-hojas.service';
import { ListarColorEspiralService } from 'src/app/services/listar-color-espiral.service';
import { ListarTipoTapaService } from '../../../services/listar-tipo-tapa.service';
import { PlanificadorModel } from 'src/app/Models/planificador.models';

@Component({
  selector: 'app-planificador',
  templateUrl: './planificador.component.html',
  styleUrls: ['./planificador.component.css']
})
export class PlanificadorComponent implements OnInit {

  planificadores:any[]=[];
  detallePedido= new DetallePedidoModel();
  planificador= new PlanificadorModel();
  productos:any[]=[];
  tipoHojas:any[]=[];
  tamanioHojas:any[]=[];
  tipoTapas:any[]=[];
  coloresEspirales:any[]=[];

  constructor(private planificadorService:PlanificadorService, private router: Router,
    private listarproductoService:ListarProductoService, private listarTipoHojasService: ListarTipoHojasService,
    private listarTamanioHojasService:ListarTamanioHojasService, private listarcolorEspiralService:ListarColorEspiralService,
    private listarTipoTapasService:ListarTipoTapaService) {
      this.listarproductoService.all().subscribe(resp=>{  this.productos=resp[2];});


    }

  ngOnInit(): void {

    this.listarTipoHojasService.all().subscribe(resp=>{ this.tipoHojas=resp[2];});
    this.listarTamanioHojasService.all().subscribe(resp=>{ this.tamanioHojas=resp[2];});
    this.listarTipoTapasService.all().subscribe(resp=>{ this.tipoTapas=resp[2];});
    this.listarcolorEspiralService.all().subscribe(resp=>{ this.coloresEspirales=resp[2];});
    this.planificadorService.all().subscribe(resp=>{ this.planificadores=resp[2];});


  }

  guardar(form:NgForm){
    if(form.invalid){
      return;
    }
    this.planificadorService.crear(this.planificador,localStorage.getItem('token')).subscribe((resp:any)=>{
      if(resp.status==='error'){
         Swal.fire({
           icon: 'error',
          title: 'Error de Registro',
          text: resp.mensaje
        });

        return;
      }

      Swal.close();
      Swal.fire({
        icon: 'success',
       title: 'Planificador creado con éxito.',
     }).then(resp=>{
       if(resp.value){
        this.router.navigate(['/planificador']);
       }
     });
    });

}
}
