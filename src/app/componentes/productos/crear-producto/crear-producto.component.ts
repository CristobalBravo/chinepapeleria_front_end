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

  producto = new ProductoModel();

  marcas: any[] = [];
  categorias: any[] = [];

  constructor(private categoriaService: CategoriaService,
    private marcaService: MarcaService,
    private crearProductoService: CrearProductoService) { }

  ngOnInit(): void {
    this.categoriaService.all().subscribe(resp => {
      this.categorias = resp[2];
    });
    this.marcaService.all().subscribe(resp => {
      this.marcas = resp[2];
    });
  }

  fileChange(files: any) {
    this.producto.img = files[0];
  }

  public guardar(form: NgForm){
    if (form.invalid){
      console.log('formulario no valido');
      return;
    }
    console.log(this.producto);
    /* Para enviar información y archivos se hace con un FormData() (es una de las formas) */
    var formdata = new FormData();

    formdata.append('nombre', this.producto.nombre);
    formdata.append('stock', this.producto.stock.toString());
    formdata.append('precio', this.producto.precio.toString());
    formdata.append('Categoria_id', this.producto.Categoria_id.toString());
    formdata.append('Marca_id', this.producto.Marca_id.toString());
    /** IMAGEN - ARCHIVO */
    formdata.append('img', this.producto.img);

    this.crearProductoService.crearProducto(formdata, localStorage.getItem('token')).subscribe(resp => {
      console.log(resp.status);
      if (resp.status === 'success'){
        form.resetForm();
      }
    });
  }

  public borrar(form: NgForm) {
    this.producto = new ProductoModel();
    form.resetForm();
  }
}
