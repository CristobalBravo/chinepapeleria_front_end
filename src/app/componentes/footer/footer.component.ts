import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  oculto = '';
  oculto2 = '';

  constructor() { }

  ngOnInit(): void {
  }



  abrirModal(){
    this.oculto2='block';
  }
  cerrarModal(){
    this.oculto2='';
    this.oculto='';
  }

}
