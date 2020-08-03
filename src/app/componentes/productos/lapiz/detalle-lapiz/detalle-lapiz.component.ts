import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListarLapizService } from '../../../../services/Lapiz/listar-lapiz.service';
import { LapizModel } from '../../../../Models/lapiz.model';
import { DetallePedidoModel } from 'src/app/Models/detallePedido.model';
import { PedidoService } from '../../../../services/pedido.service';
import { NgForm } from '@angular/forms';
import { DetallePedidoService } from '../../../../services/detalle-pedido.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-lapiz',
  templateUrl: './detalle-lapiz.component.html',
  styleUrls: ['./detalle-lapiz.component.css']
})
export class DetalleLapizComponent implements OnInit {

 lapiz:any;
 producto:any;
 tipoPunta:any;
 detallePedido = new DetallePedidoModel();

  constructor( private activatedRoute: ActivatedRoute, private listarLapizService:ListarLapizService,
    private pedidoService: PedidoService, private detallePedidoServicio:DetallePedidoService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(resp=>{

      let l= new LapizModel();
      l.id=resp.id;
      this.listarLapizService.obtenerlapiz(l,localStorage.getItem('token')).subscribe((resp:any)=>{
        this.lapiz=resp.lapiz;
        this.producto=this.lapiz.producto;
        this.tipoPunta=this.lapiz.tipopunta;
        console.log(this.lapiz);
        console.log(this.producto);
        console.log(this.tipoPunta);
      }

      );

    });
  }



  guardar(form:NgForm){
    if(form.invalid){
      console.log('formulario invalido');
    }

     let cantidad= this.detallePedido.cantidad;
    let precio = parseInt(cantidad) * this.producto.precio;

    this.detallePedido.precio= precio.toString()  ;


    this.pedidoService.crearPedido(null,localStorage.getItem('token')).subscribe((resp:any)=>{

      console.log(resp);
      let cantidad= this.detallePedido.cantidad;
      let precio = parseInt(cantidad) * this.producto.precio;

      this.detallePedido.precio= precio.toString();
      this.detallePedido.Pedido_id=resp.pedido.id;
      this.detallePedido.Producto_id= this.producto.id;
      this.detallePedidoServicio.crearPedido(this.detallePedido,localStorage.getItem('token')).subscribe((resp)=>
      {console.log(resp)})
      if(resp.status!=='error'){
        console.log(resp.status);
        console.log(resp);
         Swal.fire({
          icon: 'success',
          title: 'Pedido creado con éxito.',
        });

        return;
      }
    }
    );


  }
}

