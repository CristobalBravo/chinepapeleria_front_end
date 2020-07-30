import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../../Models/usuario.models';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  usuario = new UsuarioModel();
  constructor( private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  guardar(form:NgForm){

    if(form.invalid){
      console.log('Formulario no Válido');
      return;
    }
    console.log(this.usuario);
    this.usuarioService.crearUsuario(this.usuario).subscribe(resp=>{(console.log(resp))});

  }

}
