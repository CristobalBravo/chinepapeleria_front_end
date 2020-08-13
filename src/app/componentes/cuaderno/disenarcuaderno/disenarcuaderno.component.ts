import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-disenarcuaderno',
  templateUrl: './disenarcuaderno.component.html',
  styleUrls: ['./disenarcuaderno.component.css']
})
export class DisenarcuadernoComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  guardar(form:NgForm){ 
    if(form.invalid){
      console.log('formulario invalido');
    }
    
    
  }

}
