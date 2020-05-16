import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  constructor() { }

  valorDelInput = '';
  valorDelInput2: any;
  nombreBoton1 = 'CALCULAR';
  res: any;
  ngOnInit(): void {
  }
  obtenerResultado(evento){
    console.log(evento);
  }
}
