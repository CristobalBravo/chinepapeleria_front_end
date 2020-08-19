import { PlanificadorModel } from './planificador.models';
import { LapizModel } from './lapiz.model';
import { FlashCardModel } from './flashcard.models';
import { AgendaModel } from './agenda.models';

export class ProductoModel {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  img: string;
  Categoria_id: number;
  Marca_id: number;
  TipoProducto_id: number;

  lapiz: LapizModel;
  flashcard: FlashCardModel;
  planificador: PlanificadorModel;
  agenda:AgendaModel;

  constructor() {}
}
