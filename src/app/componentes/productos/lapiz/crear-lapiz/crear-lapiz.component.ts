import { Component, OnInit } from '@angular/core';
import { LapizModel } from '../../../../Models/lapiz.model';
import { CrearLapizService } from '../../../../services/Lapiz/crear-lapiz.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-crear-lapiz',
  templateUrl: './crear-lapiz.component.html',
  styleUrls: ['./crear-lapiz.component.css']
})
export class CrearLapizComponent implements OnInit {

  lapiz = new LapizModel();

  constructor(private crearLapizService:CrearLapizService, private router:Router ) { }

  ngOnInit(): void {
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


  }

}
