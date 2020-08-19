import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashCardService } from '../../../services/flash-card.service';
import { TipoLineaService } from '../../../services/tipo-linea.service';
import { ConfiguracionFlashCardModel } from '../../../Models/ConfiguracionFlashCard.model';
import { DisenoModel } from 'src/app/Models/diseno.model';
import { NgForm } from '@angular/forms';
import { PedidoService } from '../../../services/pedido.service';
import { DetallePedidoModel } from '../../../Models/detallePedido.model';
import { DetallePedidoService } from '../../../services/detalle-pedido.service';
import { DiseñoService } from 'src/app/services/diseño.service';
import { ConfiguracionFlashCardService } from '../../../services/configuracion-flash-card.service';


@Component({
  selector: 'app-disenar',
  templateUrl: './disenar.component.html',
  styleUrls: ['./disenar.component.css']
})
export class DisenarComponent implements OnInit {
  detallePedido:DetallePedidoModel= new DetallePedidoModel();
  configuracionFlashCard:ConfiguracionFlashCardModel= new ConfiguracionFlashCardModel();
  diseno:DisenoModel= new DisenoModel();
  idDiseno:number;
  flashcard:any;
  tipoLineas:[]=[];
  constructor(private route:ActivatedRoute, private flashCardService:FlashCardService,
    private tipoLineService:TipoLineaService, private pedioService:PedidoService,
    private detallePedidoServicio:DetallePedidoService, private disenoService:DiseñoService,
    private configuracionFlashCardService:ConfiguracionFlashCardService, private router:Router) {
     }

  ngOnInit(): void {
    this.route.params.subscribe(id=>{
      this.flashCardService.buscarPorId(id).subscribe((resp:any)=>{

        this.flashcard=resp.flashCard;
      });
    });
    this.tipoLineService.all().subscribe(resp=>{
      this.tipoLineas=resp[2];
    });
  }
  fileChange(files: any) {
    this.diseno.image = files[0];
  }

  guardar(form:NgForm){
    if(form.invalid){
      console.log('formulario invalido');
    }

    if (localStorage.getItem('token')!= null){
      //creo un diseño
    var formdata = new FormData();
    formdata.append('nombre', this.diseno.nombre);
    /** IMAGEN - ARCHIVO */
    formdata.append('image', this.diseno.image);
      this.disenoService.crear(formdata,localStorage.getItem('token')).subscribe((resp:any)=>{
        if(resp.status==='success'){
          this.idDiseno=resp.data.id;
          form.resetForm();
        }
      })
      //creo un pedido
      this.pedioService.crearPedido(null, localStorage.getItem('token')).subscribe((resp:any)=>{
        let idPedido=resp.pedido.id;
        let idProducto=this.flashcard.producto.id;
        let precioProducto= this.flashcard.producto.precio;
        let precioDetallePedido= +this.detallePedido.cantidad * precioProducto;
        this.detallePedido.Pedido_id=idPedido;
        this.detallePedido.Producto_id=idProducto;
        this.detallePedido.precio= precioDetallePedido.toString();
        //creo un detalle del pedido
        this.detallePedidoServicio.crearPedido(this.detallePedido,localStorage.getItem('token')).subscribe((resp:any)=>{
          let idDetallePedido=resp.detallePedido.id;
          let idFlashcard=this.flashcard.id;
          this.configuracionFlashCard.DetallePedido_id=idDetallePedido;
          this.configuracionFlashCard.FlashCard_id=idFlashcard;
          this.configuracionFlashCard.Diseno_id=this.idDiseno.toString();
          //creo la configuracion de la flash card
          this.configuracionFlashCardService.crear(this.configuracionFlashCard,localStorage.getItem('token')).subscribe((resp:any)=>{
          })
        })
      })
      this.router.navigateByUrl('pedido/detalle');

    }
  }

}
