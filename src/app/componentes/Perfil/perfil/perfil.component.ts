import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
import { UsuarioModel } from '../../../Models/usuario.models';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  isAdmin:boolean;
  user= new UsuarioModel();

  constructor(private loginService:LoginService, private router:Router,
    private usuarioService:UsuarioService) {
    this.isAdmin=false;



  }

  ngOnInit(): void {
    this.isAdmin = this.loginService.admin();
    this.usuarioService.buscarUsuario(localStorage.getItem('token')).subscribe((resp:any)=> {
      console.log(resp.usuario);
      this.user= resp.usuario;
    });
  }

  salir(){
    this.loginService.logout();
    Swal.fire({
      icon: 'success',
     title: 'Sesión Terminada con éxito.',
   });
    this.router.navigateByUrl('/login');

  }

}
