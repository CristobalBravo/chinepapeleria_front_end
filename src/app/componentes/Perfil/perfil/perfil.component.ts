import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
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
