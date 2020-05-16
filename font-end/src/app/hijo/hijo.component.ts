import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() nombreBoton1: string;
  @Input()resultado: number;
  @Output() resultadoChange = new EventEmitter();

  constructor() { }
  @Input() valorDelPadre: string;
  @Input() valorDelAnio: number;
  ngOnInit() {

  }

  alertaValorPadre() {
    alert(this.valorDelPadre);
  }

  calcular(){
    this.resultado = 2020 - this.valorDelAnio;
    this.resultadoChange.emit(this.resultado);
  }

}
