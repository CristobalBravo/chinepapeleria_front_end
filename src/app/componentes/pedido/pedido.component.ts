import { Component, OnInit } from '@angular/core';
import { DetallePedidoService } from '../../services/detalle-pedido.service';
import { PedidoService } from '../../services/pedido.service';
import { ListarProductoService } from '../../services/Producto/listar-producto.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  detallePedidos:any[]=[];
  productos:any[]=[];
  pedidos:any[]=[];
  productoOfDetalle:any[]=[];
  pedidoOfDetalle:any[]=[];
  total:number=0;

  constructor(private detallePedidoService: DetallePedidoService,private pedidoService:PedidoService,
    private productoService: ListarProductoService) { }

  ngOnInit(): void {

    this.pedidoService.all().subscribe((resp:any)=>
    {
      this.pedidos=resp[2];
    });

    this.productoService.all().subscribe((resp:any)=>
    {
      this.productos=resp[2];
    });

    this.detallePedidoService.obtenerPedido(localStorage.getItem('token')).subscribe((resp:any)=>{

      this.detallePedidos=resp[2];

      this.detallePedidos.forEach( (d:any) => {
        this.total=this.total+parseInt(d.precio);
        this.pedidos.forEach((p:any) => {
          if(d.Pedido_id===p.id){
            this.pedidoOfDetalle.push(p);
            return;
          }

        });

        this.detallePedidos.forEach( (d:any) => {
          this.productos.forEach((p:any) => {
            if(d.Producto_id===p.id){
              this.productoOfDetalle.push(p);
              return;
            }

          });

      });

      });



  });

  console.log(this.productoOfDetalle);
  console.log(this.pedidoOfDetalle);

}

}
