import { Component, OnInit } from '@angular/core';
import { CuadernoService } from '../../../../services/cuaderno.service';

@Component({
  selector: 'app-listar-cuaderno',
  templateUrl: './listar-cuaderno.component.html',
  styleUrls: ['./listar-cuaderno.component.css']
})
export class ListarCuadernoComponent implements OnInit {

  cuadernos:any[]=[];
  constructor(private cuadernoService:CuadernoService) { }

  ngOnInit(): void {
    this.cuadernoService.all().subscribe((resp:any)=>{
      console.log(resp[2]);
      this.cuadernos=resp[2];
    })
  }

}
