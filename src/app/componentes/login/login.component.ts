import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../Models/login.models';
import { LoginService } from '../../services/login.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

import {  Router } from '@angular/router';
import { CrearProductoService } from '../../services/Producto/crear-producto.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new LoginModel();
  recordarme = false;



  constructor(private loginService:LoginService, private router: Router,private servise: CrearProductoService) { }

  ngOnInit(){
    if(localStorage.getItem('email')){
      this.login.email = localStorage.getItem('email');
      this.recordarme=true;
    }
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



    console.log(this.login);
    this.loginService.logearUsuario(this.login).subscribe((resp:any) => {

      if(resp.status === "error"){
        console.log(resp.status);
        Swal.fire({
          icon: 'error',
          title: 'Error de Autentificación',
          text: resp.message
        });
        return;
      }
      Swal.close();

      if(this.recordarme){
        localStorage.setItem('email', this.login.email);
      }
      console.log("Ingreso correcto");
      this.servise.crearProducto(null,localStorage.getItem('token')).subscribe(resp=>
        console.log(resp));
      this.router.navigateByUrl('/perfil');




    });
  }



}
