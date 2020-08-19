import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AgendaService } from '../../../../services/agenda.service';
import { PedidoService } from '../../../../services/pedido.service';
import { DetallePedidoService } from '../../../../services/detalle-pedido.service';
import { AgendaModel } from '../../../../Models/agenda.models';
import { DetallePedidoModel } from '../../../../Models/detallePedido.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Colorespiral } from '../../../../Models/colorespiral';
import { ColorEspiralService } from '../../../../services/color-espiral.service';
import { configuracionAgendaModel } from '../../../../Models/configuracionAgenda.models';

@Component({
  selector: 'app-disenar-agenda',
  templateUrl: './disenar-agenda.component.html',
  styleUrls: ['./disenar-agenda.component.css']
})
export class DisenarAgendaComponent implements OnInit {
  agenda: any = { producto: { marca: {}, categoria: {} } };
  producto: any = { marca: {}, categoria: {}, img: 'logo.png'};
  tipoHoja: any = {};
  tipoTapa: any = {};
  TamanioHoja: any = {};
  colorEspiral: Colorespiral[] = [];
  detallePedido = new DetallePedidoModel();
  colorElegido: string = '';
  configuracionAgenda= new configuracionAgendaModel();


  constructor(private router:Router,
    private ActivatedRoute:ActivatedRoute,
    private agendaService:AgendaService,
    private pedidoService:PedidoService,
    private ColorEspiralService: ColorEspiralService,
    private detallePedidoService:DetallePedidoService) {
      this.detallePedido.cantidad = 0;
     }

  ngOnInit(): void {
    this.ColorEspiralService.all().subscribe((resp) => {
      console.log(resp)
      this.colorEspiral = resp.colorespiral;
      console.log(this.colorEspiral);
    });
    this.ActivatedRoute.params.subscribe(resp=>{
      let l = new AgendaModel();
      l.id= resp.id;
      this.agendaService.obtenerAgenda(l,localStorage.getItem('token'))
      .subscribe((agenda:any)=>{
        console.log(agenda);
        this.agenda=agenda.Agenda;
        this.producto=agenda.Agenda.producto;
        this.TamanioHoja=agenda.Agenda.tamanio_hoja;
        this.tipoTapa=agenda.Agenda.tipo_tapa;
        this.tipoHoja=agenda.Agenda.tipo_hoja;
        console.log(this.TamanioHoja);
      })
    })
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

  cambioColor(event) {
    let idcolor = event.target.value;
    this.colorEspiral.forEach((colorEsp) => {
      if (colorEsp.id == idcolor) {
        this.colorElegido = colorEsp.colorrgb;
      }
    });
  }

  guardar(form: NgForm) {
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
        this.detallePedidoService
          .crearPedido(this.detallePedido, localStorage.getItem('token'))
          .subscribe((resp) => {
            console.log(this.agenda);
            let idAgenda=this.agenda.id;
            console.log(idAgenda);
            let idDetallePedido=resp.detallePedido.id;
            this.configuracionAgenda.Agenda_id=idAgenda;
            this.configuracionAgenda.DetallePedido_id=idDetallePedido;
            this.agendaService
            .crearConfiguracion(this.configuracionAgenda,localStorage.getItem('token'))
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
