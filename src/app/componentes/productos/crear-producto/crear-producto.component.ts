import { TipoPuntaService } from './../../../services/tipo-punta.service';
import { TipoPuntaModel } from './../../../Models/TipoPunta.models';
import { Colorespiral } from './../../../Models/colorespiral';
import { ColorEspiralService } from './../../../services/color-espiral.service';
import { Tipotapa } from './../../../Models/tipotapa';
import { Tipohoja } from './../../../Models/tipohoja';
import { Tamaniohoja } from './../../../Models/tamaniohoja';
import { TamanioHojaService } from './../../../services/tamanio-hoja.service';
import { TipoTapaService } from './../../../services/tipo-tapa.service';
import { TipoHojaService } from './../../../services/tipo-hoja.service';
import { PlanificadorModel } from './../../../Models/planificador.models';
import { LapizModel } from './../../../Models/lapiz.model';
import { TipoProductoService } from './../../../services/tipo-producto.service';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../services/categoria.service';
import { MarcaService } from '../../../services/marca.service';
import { NgForm } from '@angular/forms';
import { ProductoModel } from '../../../Models/producto.models';
import { CrearProductoService } from '../../../services/Producto/crear-producto.service';
import { FlashCardModel } from 'src/app/Models/flashcard.models';
import Swal from 'sweetalert2';
import { ViewChild, ElementRef } from '@angular/core';
import { AgendaModel } from 'src/app/Models/agenda.models';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css'],
})
export class CrearProductoComponent implements OnInit {
  LAPIZ: number = 1;
  CUADERNO: number = 2;
  AGENDA: number = 3;
  PLANIFICADOR: number = 4;
  FLASHCARD: number = 5;

  producto = new ProductoModel();
  colorElegido: string = '';

  @ViewChild('fileupload')
  fileinput: ElementRef;

  marcas: any[] = [];
  categorias: any[] = [];
  tipoProducto: any[] = [];
  tipoHoja: Tipohoja[] = [];
  tipoTapa: Tipotapa[] = [];
  tamanioHoja: Tamaniohoja[] = [];
  colorEspiral: Colorespiral[] = [];
  tipoPunta: TipoPuntaModel[] = [];

  constructor(
    private categoriaService: CategoriaService,
    private marcaService: MarcaService,
    private tipoProductoService: TipoProductoService,
    private crearProductoService: CrearProductoService,
    private TipoHojaService: TipoHojaService,
    private TipoTapaService: TipoTapaService,
    private TipoPuntaService: TipoPuntaService,
    private ColorEspiralService: ColorEspiralService,
    private TamanioHojaService: TamanioHojaService
  ) {
    this.producto.lapiz = new LapizModel();
    this.producto.agenda = new AgendaModel;
    this.producto.flashcard = new FlashCardModel();
    this.producto.planificador = new PlanificadorModel();
  }

  ngOnInit(): void {
    this.categoriaService.all().subscribe((resp) => {
      this.categorias = resp[2];
    });
    this.marcaService.all().subscribe((resp) => {
      this.marcas = resp[2];
    });

    this.tipoProductoService.all().subscribe((resp) => {
      this.tipoProducto = resp.tipoProducto;
    });

    this.TipoTapaService.all().subscribe((resp) => {
      this.tipoTapa = resp.usuario;
    });

    this.TipoHojaService.all().subscribe((resp) => {
      this.tipoHoja = resp.usuario;
    });

    this.TamanioHojaService.all().subscribe((resp) => {
      this.tamanioHoja = resp.usuario;
    });

    this.ColorEspiralService.all().subscribe((resp) => {
      this.colorEspiral = resp.colorespiral;
    });

    this.TipoPuntaService.all().subscribe((resp) => {
      this.tipoPunta = resp.usuario;
    });
  }

  cambioColor(event) {
    let idcolor = event.target.value;
    this.colorEspiral.forEach((colorEsp) => {
      if (colorEsp.id == idcolor) {
        this.colorElegido = colorEsp.colorrgb;
      }
    });
  }

  fileChange(files: any) {
    this.producto.img = files[0];
  }

  public guardar(form: NgForm) {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Validando',
    });
    Swal.showLoading();
    if (form.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Formulario no Válido',
        text: 'Uno o más datos son incorrectos',
      });
      return;
    }
    /* Para enviar información y archivos se hace con un FormData() (es una de las formas) */
    var formdata = new FormData();

    formdata.append('nombre', this.producto.nombre);
    formdata.append('stock', this.producto.stock.toString());
    formdata.append('precio', this.producto.precio.toString());
    formdata.append('Categoria_id', this.producto.Categoria_id.toString());
    formdata.append('Marca_id', this.producto.Marca_id.toString());
    formdata.append(
      'TipoProducto_id',
      this.producto.TipoProducto_id.toString()
    );
    /** IMAGEN - ARCHIVO */
    formdata.append('img', this.producto.img);

    /** DATOS POR TIPO DE PRODUCTO */
    if (this.producto.TipoProducto_id == this.LAPIZ) {
      if (this.producto.lapiz.TipoPunta_id != null) {
        formdata.append(
          'TipoPunta_id',
          this.producto.lapiz.TipoPunta_id.toString()
        );
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Formulario no Válido',
          text: 'No ha seleccionado el tipo de punta del Lápiz',
        });
        return;
      }

      if (
        this.producto.lapiz.color_name != null &&
        this.producto.lapiz.color_name != ''
      ) {
        formdata.append('color', this.producto.lapiz.color_name);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Formulario no Válido',
          text: 'No ha ingresado el nombre del color del Lápiz',
        });
        return;
      }

      if (
        this.producto.lapiz.color_rgb != null &&
        this.producto.lapiz.color_rgb != ''
      ) {
        formdata.append('colorrgb', this.producto.lapiz.color_rgb);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Formulario no Válido',
          text: 'No ha seleccionado el color del Lápiz',
        });
        return;
      }

      if (this.producto.lapiz.descripcion != null && this.producto.lapiz.descripcion != '') {
        formdata.append('descripcion', this.producto.lapiz.descripcion);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Formulario no Válido',
          text: 'No ha ingresado una descripción del Lápiz',
        });
        return;
      }
    }

    if (this.producto.TipoProducto_id == this.FLASHCARD) {
      if (this.producto.flashcard.alto != null) {
        formdata.append('alto', this.producto.flashcard.alto.toString());
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Formulario no Válido',
          text: 'No ha ingresado el alto de la FlashCard',
        });
        return;
      }

      if (this.producto.flashcard.ancho != null) {
        formdata.append('ancho', this.producto.flashcard.ancho.toString());
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Formulario no Válido',
          text: 'No ha ingresado el ancho de la FlashCard',
        });
        return;
      }

      if (this.producto.flashcard.cantidad_hojas != null) {
        formdata.append(
          'cantidad_hojas',
          this.producto.flashcard.cantidad_hojas.toString()
        );
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Formulario no Válido',
          text: 'No ha ingresado la cantidad de hojas de la FlashCard',
        });
        return;
      }

      if (this.producto.flashcard.unidad_medida != null && this.producto.flashcard.unidad_medida != '') {
        formdata.append('unidad_medida', this.producto.flashcard.unidad_medida);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Formulario no Válido',
          text: 'No ha ingresado la unidad de medida de la FlashCard',
        });
        return;
      }

      if (this.producto.flashcard.descripcion != null && this.producto.flashcard.descripcion != '') {
        formdata.append('descripcion', this.producto.flashcard.descripcion);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Formulario no Válido',
          text: 'No ha ingresado la descripción de la FlashCard',
        });
        return;
      }
    }

    if (this.producto.TipoProducto_id == this.PLANIFICADOR) {
      if (this.producto.planificador.cantidad_hojas != null) {
        formdata.append('cantidad_hojas', this.producto.planificador.cantidad_hojas.toString());
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Formulario no Válido',
          text: 'No ha ingresado la cantidad de hojas del Planificador',
        });
        return;
      }
      if (this.producto.planificador.ColorEspiral_id != null) {
        formdata.append('ColorEspiral_id', this.producto.planificador.ColorEspiral_id.toString());
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Formulario no Válido',
          text: 'No ha seleccionado el color del espiral del Planificador',
        });
        return;
      }
      if (this.producto.planificador.TamanioHoja_id != null) {
        formdata.append('TamanioHoja_id', this.producto.planificador.TamanioHoja_id.toString());
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Formulario no Válido',
          text: 'No ha seleccionado el tamaño de la hoja del Planificador',
        });
        return;
      }
      if (this.producto.planificador.TipoTapa_id != null) {
        formdata.append('TipoTapa_id', this.producto.planificador.TipoTapa_id.toString());
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Formulario no Válido',
          text: 'No ha seleccionado el tipo de la tapa del Planificador',
        });
        return;
      }
      if (this.producto.planificador.TipoHoja_id != null) {
        formdata.append(
          'TipoHoja_id',
          this.producto.planificador.TipoHoja_id.toString()
        );
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Formulario no Válido',
          text: 'No ha seleccionado el tipo de la hoja del Planificador',
        });
        return;
      }
    }

    if (this.producto.TipoProducto_id == this.AGENDA) {
      if (this.producto.agenda.cantidad_hojas != null) {
        formdata.append('cantidad_hojas', this.producto.agenda.cantidad_hojas.toString());
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Formulario no Válido',
          text: 'No ha ingresado la cantidad de hojas del Planificador',
        });
        return;
      }
      if (this.producto.agenda.TamanioHoja_id != null) {
        formdata.append('TamanioHoja_id', this.producto.agenda.TamanioHoja_id.toString());
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Formulario no Válido',
          text: 'No ha seleccionado el tamaño de la hoja del agenda',
        });
        return;
      }
      if (this.producto.agenda.TipoTapa_id != null) {
        formdata.append('TipoTapa_id', this.producto.agenda.TipoTapa_id.toString());
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Formulario no Válido',
          text: 'No ha seleccionado el tipo de la tapa del Agenda',
        });
        return;
      }
      if (this.producto.agenda.TipoHoja_id != null) {
        formdata.append(
          'TipoHoja_id',
          this.producto.agenda.TipoHoja_id.toString()
        );
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Formulario no Válido',
          text: 'No ha seleccionado el tipo de la hoja del Agenda',
        });
        return;
      }
    }

    this.crearProductoService
      .crearProducto(formdata, localStorage.getItem('token'))
      .subscribe((resp) => {

        if (resp.status === 'success') {
          this.producto = new ProductoModel();
          this.producto.lapiz = new LapizModel();
          this.producto.agenda= new AgendaModel();
          this.producto.flashcard = new FlashCardModel();
          this.producto.planificador = new PlanificadorModel();
          this.fileinput.nativeElement.value = '';
          form.resetForm();
          Swal.close();
          Swal.fire({
            icon: 'success',
            title: 'Producto creado con éxito'

          });
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Ha ocurrido un Error',
            text: resp.message,
          });
        }
      });
  }

  public borrar(form: NgForm) {
    this.producto = new ProductoModel();
    this.producto.lapiz = new LapizModel();
    this.producto.flashcard = new FlashCardModel();
    this.producto.planificador = new PlanificadorModel();
    this.fileinput.nativeElement.value = '';
    form.resetForm();
  }
}
