import { Component, OnInit } from '@angular/core';
import { LapizModel } from '../../../Models/lapiz.model';
import { ListarLapizService } from '../../../services/Lapiz/listar-lapiz.service';
import { ProductoModel } from '../../../Models/producto.models';
import { ListarProductoService } from '../../../services/Producto/listar-producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lapiz',
  templateUrl: './lapiz.component.html',
  styleUrls: ['./lapiz.component.css']
})
export class LapizComponent implements OnInit {

  lapices:any[]=[];


  constructor(private listarlapizService:ListarLapizService,private router:Router) { }

  ngOnInit(): void {

    this.listarlapizService.all().subscribe(resp=>{this.lapices=resp[2];});

  }






}
