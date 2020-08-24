import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroupDirective, FormGroup, FormControl, Validators } from '@angular/forms';
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

  userForm: FormGroup;

  nombre = new FormControl('', [
    Validators.required
  ]);

  apellido = new FormControl('', [
    Validators.required
  ]);

  rut = new FormControl('', [
    Validators.required,
    Validators.max(99999999),
    Validators.min(1000000)
  ]);

  codigo_verificacion = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
    Validators.maxLength(1)
  ]);

  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  numero = new FormControl('', [
    Validators.required,
    Validators.max(999999999),
    Validators.min(900000000)
  ]);

  ciudad = new FormControl('', [
    Validators.required
  ]);

  calle = new FormControl('', [
    Validators.required
  ]);

  password = new FormControl('', [
    Validators.required
  ]);

  submitted = false;


  constructor(private usuarioService: UsuarioService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      nombre: this.nombre,
      apellido: this.apellido,
      rut: this.rut,
      codigo_verificacion: this.codigo_verificacion,
      email: this.email,
      numero: this.numero,
      ciudad: this.ciudad,
      calle: this.calle,
      password: this.password,
      floatLabel: 'auto'
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.userForm.invalid) {
      console.log('Formulario no Válido');
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor'
    });
    Swal.showLoading();

    this.usuario = this.userForm.value;
    this.usuarioService.crearUsuario(this.usuario).subscribe((resp: any) => {

      if (resp.status === 'error') {

        Swal.fire({
          icon: 'error',
          title: 'Error de Registro',
          text: resp.mensaje
        });

        return;
      }
      Swal.close();
      Swal.fire({
        icon: 'success',
        title: 'Usuario creado con éxito.',
      });
      this.router.navigateByUrl('/login');



    });


  }

  onReset() {
    this.submitted = false;
    this.userForm.reset();
  }

}
