import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanificadorService } from '../../../../../services/planificador.service';
import { NgForm } from '@angular/forms';
import { TipoPlanificadorService } from '../../../../../services/tipo-planificador.service';
import { DetallePedidoModel } from '../../../../../Models/detallePedido.model';
import Swal from 'sweetalert2';
import { DetallePedidoService } from '../../../../../services/detalle-pedido.service';
import { PedidoService } from '../../../../../services/pedido.service';
import { PlanificadorModel } from '../../../../../Models/planificador.models';
import { ConfiguracionPlanificadorModel } from '../../../../../Models/configuradorPlanificador.model';

@Component({
  selector: 'app-disenar-planificador',
  templateUrl: './disenar-planificador.component.html',
  styleUrls: ['./disenar-planificador.component.css']
})
export class DisenarPlanificadorComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private planificadorService:PlanificadorService, private tipoPlanificadorService:TipoPlanificadorService,
    private router:Router, private detallePedidoServicio:DetallePedidoService, private pedidoService:PedidoService) { this.detallePedido.cantidad = 0;}

  planificador:any;
  tiposPlanificador:any[]=[];
  producto: any = { marca: {}, categoria: {}, img: 'logo.png'};
  detallePedido = new DetallePedidoModel();
  confPlanificador = new ConfiguracionPlanificadorModel();

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(id=>{
      this.planificadorService.buscarPorId(id, localStorage.getItem("token")).subscribe((resp:any)=>{
        console.log(resp);
        this.planificador=resp.planificador;
        this.producto=resp.planificador.producto;
      });
    });

    this.tipoPlanificadorService.all().subscribe(resp=>{console.log(resp[2]);
      this.tiposPlanificador=resp[2]});



  }



  cambiarCantidad(accion:number){
    var cant = this.detallePedido.cantidad;
    if (accion === 1){ //Agregar una unidad
      cant++;
      if (cant > this.producto.stock){
        cant = this.producto.stock;
      }
    }else if (accion === 0){ //Quitar una unidad
      cant--;
      if (cant < 0) {
        cant = 0;
      }
    }
    this.detallePedido.cantidad = cant;
  }

  guardar(form:NgForm){
    if (form.invalid) {
      console.log('formulario invalido');
    }
    this.pedidoService
      .crearPedido(null, localStorage.getItem('token'))
      .subscribe((resp: any) => {
        let cantidad = this.detallePedido.cantidad;
        let precio = cantidad * this.producto.precio;

        this.detallePedido.precio = precio.toString();
        this.detallePedido.Pedido_id = resp.pedido.id;
        this.detallePedido.Producto_id = this.producto.id;
        this.detallePedidoServicio
          .crearPedido(this.detallePedido, localStorage.getItem('token'))
          .subscribe((resp) => {

            console.log(resp);
            let idPlanificador=this.planificador.id;
            let idDetallepedido=resp.detallePedido.id;
            this.confPlanificador.Planificador_id=idPlanificador;
            this.confPlanificador.DetallePedido_id=idDetallepedido;

            this.planificadorService.crearConfiguracion(this.confPlanificador,localStorage.getItem("token"))
            .subscribe(resp=>{
            console.log(resp);
          })
        });
        if (resp.status !== 'error') {
          console.log(resp.status);
          console.log(resp);
          Swal.fire({
            icon: 'success',
            title: 'Pedido creado con éxito.',
          });
          this.router.navigateByUrl('pedido/detalle');
          return;
        }
      });


  }


}
