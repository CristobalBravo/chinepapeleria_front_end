import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetallePedidoModel } from 'src/app/Models/detallePedido.model';
import { PedidoService } from '../../../../services/pedido.service';
import { NgForm } from '@angular/forms';
import { DetallePedidoService } from '../../../../services/detalle-pedido.service';
import Swal from 'sweetalert2';
import { CuadernoService } from '../../../../services/cuaderno.service';
import { CuadernoModel } from 'src/app/Models/cuaderno.models';
import { Colorespiral } from '../../../../Models/colorespiral';
import { ColorEspiralService } from '../../../../services/color-espiral.service';
import { Tipotapa } from '../../../../Models/tipotapa';
import { Tipohoja } from '../../../../Models/tipohoja';
import { Tamaniohoja } from '../../../../Models/tamaniohoja';
import { TamanioHojaService } from '../../../../services/tamanio-hoja.service';
import { TipoTapaService } from '../../../../services/tipo-tapa.service';
import { TipoHojaService } from '../../../../services/tipo-hoja.service';
import { configuracionCuadernoModel } from '../../../../Models/ConfiguracionCuaderno.models';
import { TipoLineaService } from '../../../../services/tipo-linea.service';

@Component({
  selector: 'app-disenar-cuaderno',
  templateUrl: './disenar-cuaderno.component.html',
  styleUrls: ['./disenar-cuaderno.component.css']
})
export class DisenarCuadernoComponent implements OnInit {
  cuaderno: any = { producto: { marca: {}, categoria: {} } };
  producto: any = { marca: {}, categoria: {}, img: 'logo.png'};
  configuracionCuaderno= new configuracionCuadernoModel();
  detallePedido = new DetallePedidoModel();
  tipoHoja: Tipohoja[] = [];
  tipoLineas: any[] = [];
  tipoTapa: Tipotapa[] = [];
  tamanioHoja: Tamaniohoja[] = [];
  colorEspiral: Colorespiral[] = [];
  colorElegido: string = '';

  constructor(
    private TipoHojaService: TipoHojaService,
    private TipoTapaService: TipoTapaService,
    private ColorEspiralService: ColorEspiralService,
    private TamanioHojaService: TamanioHojaService,
    private tipoLineaService:TipoLineaService,
    private activatedRoute: ActivatedRoute,
    private cuadernoService: CuadernoService,
    private pedidoService: PedidoService,
    private detallePedidoServicio: DetallePedidoService,
    private router: Router
  ) {
    this.detallePedido.cantidad = 0;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((resp) => {
      let c = new CuadernoModel();
      c.id = resp.id;

      this.cuadernoService
        .obtenerCuaderno(c, localStorage.getItem('token'))
        .subscribe((lap: any) => {
          this.cuaderno = lap.cuaderno;
          this.producto = lap.cuaderno.producto;
        });

    });
    this.TipoTapaService.all().subscribe((resp) => {
      this.tipoTapa = resp.usuario;
    });

    this.TipoHojaService.all().subscribe((resp) => {
      this.tipoHoja = resp.usuario;
    });

    this.TamanioHojaService.all().subscribe((resp) => {
      this.tamanioHoja = resp.usuario;
    });

    this.ColorEspiralService.all().subscribe((resp) => {
      this.colorEspiral = resp.colorespiral;
    });
    this.tipoLineaService.all().subscribe(resp=>{
      this.tipoLineas=resp[2];
    });
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
        this.detallePedidoServicio
          .crearPedido(this.detallePedido, localStorage.getItem('token'))
          .subscribe((resp) => {
            let idCuaderno=this.cuaderno.id;
            let idDetallePedido=resp.detallePedido.id;
            this.configuracionCuaderno.Cuaderno_id=idCuaderno;
            this.configuracionCuaderno.DetallePedido_id=idDetallePedido;
            this.cuadernoService
            .crearConfiguracion(this.configuracionCuaderno,localStorage.getItem('token'))
            .subscribe(resp=>{
            })
          });

        if (resp.status !== 'error') {

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
