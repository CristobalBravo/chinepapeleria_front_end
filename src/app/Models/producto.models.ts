import { PlanificadorModel } from './planificador.models';
import { LapizModel } from './lapiz.model';
import { FlashCardModel } from './flashcard.models';

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

  constructor() {}
}
