import { Component, OnInit } from '@angular/core';
import { CuadernoService } from '../../../services/cuaderno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuaderno',
  templateUrl: './cuaderno.component.html',
  styleUrls: ['./cuaderno.component.css']
})
export class CuadernoComponent implements OnInit {
  cuadernos : any[]=[];
  cuaderno:any;
  constructor(private cuadernoService:CuadernoService,
              private router:Router) { }

  ngOnInit(): void {
    this.cuadernoService.all().subscribe(resp=>{
      this.cuadernos= resp[2];
    });
  }

  disenarCuaderno(idx){
    this.cuaderno = this.cuadernos[idx];
    this.router.navigate(['cuaderno/disenar', this.cuaderno.id]);
  }

}
