import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashCardService } from '../../../services/flash-card.service';
import { FlashCardModel } from '../../../Models/flashcard.models';
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
        console.log(resp.flashCard);
        this.flashcard=resp.flashCard;
        console.log(this.flashcard);
      });
    });
    this.tipoLineService.all().subscribe(resp=>{
      this.tipoLineas=resp[2];
    });
  }

  guardar(form:NgForm){
    if(form.invalid){
      console.log('formulario invalido');
    }

    if (localStorage.getItem('token')!= null){
      //creo un diseño
      this.disenoService.crear(this.diseno,localStorage.getItem('token')).subscribe((resp:any)=>{
        this.idDiseno=resp.diseño.id;
      })
      //creo un pedido
      this.pedioService.crearPedido(null, localStorage.getItem('token')).subscribe((resp:any)=>{
        console.log(resp.pedido);
        let idPedido=resp.pedido.id;
        let idProducto=this.flashcard.producto.id;
        let precioProducto= this.flashcard.producto.precio;
        let precioDetallePedido= +this.detallePedido.cantidad * precioProducto;
        this.detallePedido.Pedido_id=idPedido;
        this.detallePedido.Producto_id=idProducto;
        this.detallePedido.precio= precioDetallePedido.toString();
        //creo un detalle del pedido
        this.detallePedidoServicio.crearPedido(this.detallePedido,localStorage.getItem('token')).subscribe((resp:any)=>{
          console.log(resp);
          let idDetallePedido=resp.detallePedido.id;
          let idFlashcard=this.flashcard.id;
          this.configuracionFlashCard.DetallePedido_id=idDetallePedido;
          this.configuracionFlashCard.FlashCard_id=idFlashcard;
          this.configuracionFlashCard.Diseno_id=this.idDiseno.toString();
          //creo la configuracion de la flash card
          this.configuracionFlashCardService.crear(this.configuracionFlashCard,localStorage.getItem('token')).subscribe((resp:any)=>{
            console.log(resp.status)
          })
        })
      })
      this.router.navigateByUrl('pedido/detalle');
      console.log(this.diseno);
      console.log(this.configuracionFlashCard);
    }
  }

}
