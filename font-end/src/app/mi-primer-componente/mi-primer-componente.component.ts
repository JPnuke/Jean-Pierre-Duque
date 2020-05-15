import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

// @NombreDecorador() => decorador
@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.css']
})
export class MiPrimerComponenteComponent implements OnInit {

  @Input() titulo: string;
  @Input() nombreBoton: string;
  @Input() imagenPath: string;
  @Input() datos: any;

  @Output() saludoHijo = new EventEmitter();

  fecha = new Date();
  sueldo: number = 3.1416;
  nombre: string = 'jean pierre';

  constructor() { }

  ngOnInit() {
    console.log('datos del padre en hijo')
    console.log(this.datos)
  }
  //ngAfterView
  ngDestroy() {

  }

  SALUDAR() {
    alert('Hola');
    this.saludoHijo.emit('saludo de tu hijo');
  }

}
