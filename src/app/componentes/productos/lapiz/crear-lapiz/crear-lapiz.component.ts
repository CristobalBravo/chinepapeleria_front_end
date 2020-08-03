import { Component, OnInit } from '@angular/core';
import { LapizModel } from '../../../../Models/lapiz.model';
import { CrearLapizService } from '../../../../services/Lapiz/crear-lapiz.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { ListarProductoService } from '../../../../services/Producto/listar-producto.service';
import { ListarPuntasService } from '../../../../services/listar-puntas.service';


@Component({
  selector: 'app-crear-lapiz',
  templateUrl: './crear-lapiz.component.html',
  styleUrls: ['./crear-lapiz.component.css']
})
export class CrearLapizComponent implements OnInit {

  lapiz = new LapizModel();
  productos: any[]=[];
  tipoPuntas: any[]=[];

  constructor(private crearLapizService:CrearLapizService, private router:Router,
    private listarproductoService:ListarProductoService, private listarPuntasService:ListarPuntasService
    ) { }

  ngOnInit(): void {

    this.listarproductoService.all().subscribe(resp=>{this.productos=resp[2];});
    this.listarPuntasService.all().subscribe(resp=>{this.tipoPuntas=resp[2];});

  }

  guardar(form:NgForm){
    if(form.invalid){
      console.log('Formulario no Válido');
      return;
    }
    console.log(this.lapiz);
    this.crearLapizService.crearLapiz(this.lapiz,localStorage.getItem('token')).subscribe((resp:any)=>{
      if(resp.status==='error'){
        console.log(resp.status);
        console.log(resp);
         Swal.fire({
           icon: 'error',
          title: 'Error de Registro',
          text: resp.mensaje
        });

        return;
      }
      (console.log(resp));
      (console.log(resp));
      Swal.close();
      Swal.fire({
        icon: 'success',
       title: 'Lápiz creado con éxito.',
     });
    });


    this.router.navigateByUrl('/lapiz');

  }

}
