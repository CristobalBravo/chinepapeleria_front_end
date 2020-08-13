import { Component, OnInit } from '@angular/core';
import { CuadernoService } from 'src/app/services/cuaderno.service';

@Component({
  selector: 'app-cuaderno',
  templateUrl: './cuaderno.component.html',
  styleUrls: ['./cuaderno.component.css']
})
export class CuadernoComponent implements OnInit {

  cuadernos:any[]=[];
  constructor(private cuadernoservice: CuadernoService) {

   }

  ngOnInit(): void {
    this.cuadernoservice.all().subscribe((resp:any)=>{
      this.cuadernos=resp[2];
      console.log(this.cuadernos);
    })
  }

}
