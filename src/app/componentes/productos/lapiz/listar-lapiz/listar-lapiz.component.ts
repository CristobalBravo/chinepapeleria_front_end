import { Component, OnInit } from '@angular/core';
import { ListarLapizService } from '../../../../services/Lapiz/listar-lapiz.service';

@Component({
  selector: 'app-listar-lapiz',
  templateUrl: './listar-lapiz.component.html',
  styleUrls: ['./listar-lapiz.component.css']
})
export class ListarLapizComponent implements OnInit {

  lapices:any[]=[];
  constructor(private lapizService:ListarLapizService) { }

  ngOnInit(): void {
    this.lapizService.all().subscribe((resp:any)=>{
      console.log(resp[2]);
      this.lapices=resp[2];
    })
  }

}
