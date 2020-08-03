import { Component, OnInit } from '@angular/core';
import { LapizModel } from '../../../Models/lapiz.model';
import { ListarLapizService } from '../../../services/Lapiz/listar-lapiz.service';
import { ProductoModel } from '../../../Models/producto.models';
import { ListarProductoService } from '../../../services/Producto/listar-producto.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DetallePedidoModel } from '../../../Models/detallePedido.model';
import { DetallePedidoService } from '../../../services/detalle-pedido.service';
import { PedidoService } from '../../../services/pedido.service';

@Component({
  selector: 'app-lapiz',
  templateUrl: './lapiz.component.html',
  styleUrls: ['./lapiz.component.css']
})
export class LapizComponent implements OnInit {

  lapices:any[]=[];
  detallePedido= new DetallePedidoModel();
  lapiz:any;


  constructor(private listarlapizService:ListarLapizService,private router:Router,
    private detallePedidoService:DetallePedidoService, private pedidoService:PedidoService) { }

  ngOnInit(): void {

    this.listarlapizService.all().subscribe(resp=>{this.lapices=resp[2];});

  }

  verLapiz(idx:number){
    console.log(idx);
    this.lapiz=this.lapices[idx];
    this.router.navigate(['detalle',this.lapiz.id]);
  }

 guardar(form:NgForm){

  if(form.invalid){
    console.log('formulario invalido');
  }

  }





 }



