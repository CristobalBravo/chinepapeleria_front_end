import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../../Models/usuario.models';
import { UsuarioService } from '../../../services/usuario.service';
import Swal from 'sweetalert2';

import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  usuario = new UsuarioModel();
  constructor( private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  guardar(form:NgForm){

    if(form.invalid){
      console.log('Formulario no Válido');
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor'
    });
    Swal.showLoading();

    console.log(this.usuario);
    this.usuarioService.crearUsuario(this.usuario).subscribe((resp:any)=>{

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
      Swal.close();
      Swal.fire({
        icon: 'success',
       title: 'Usuario creado con éxito.',
     });
      this.router.navigateByUrl('/login');



    });


  }

}
