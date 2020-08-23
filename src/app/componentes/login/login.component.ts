import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../Models/login.models';
import { LoginService } from '../../services/login.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

import {  Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new LoginModel();
  recordarme = false;



  constructor(private loginService:LoginService, private router: Router) { }

  ngOnInit(){
    if(localStorage.getItem('email')){
      this.login.email = localStorage.getItem('email');
      this.recordarme = true;
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


    this.loginService.logearUsuario(this.login).subscribe((resp:any) => {

      if(resp.status === "error"){
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

      this.router.navigateByUrl('/home');




    });
  }



}
