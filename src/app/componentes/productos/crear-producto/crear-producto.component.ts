import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../services/categoria.service';
import { MarcaService } from '../../../services/marca.service';
import { NgForm } from '@angular/forms';
import { ProductoModel } from '../../../Models/producto.models';
import { CrearProductoService } from '../../../services/Producto/crear-producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  producto= new ProductoModel();

  marcas: any[]=[];
  categorias: any[]=[];

  constructor(private categoriaService:CategoriaService, private marcaService:MarcaService, private crearProductoService:CrearProductoService) { }

  ngOnInit(): void {
    this.categoriaService.all().subscribe(resp=>{
      this.categorias=resp[2];
    });
    this.marcaService.all().subscribe(resp=>{
      this.marcas=resp[2];
    })
  }

  public guardar(form: NgForm){
    if (form.invalid){
      console.log('formulario no valido');
      return;
    }
    console.log(this.producto);
    this.crearProductoService.crearProducto(this.producto,localStorage.getItem('token')).subscribe(resp=>{
      console.log(resp.status);
    });
  }

}
