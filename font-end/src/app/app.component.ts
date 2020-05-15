import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';

  tituloPadre = 'soy tu padre hola';
  nombreBotonPadre = 'alertar!!!!!!!!';
  imagenPadre = 'https://wallpaperaccess.com/full/30642.jpg';

  datosHijo = {
    tituloPadre: 'soy tu padre hola',
    nombreBotonPadre: 'alertar!!!!!!!!',
    imagenPadre: 'https://wallpaperaccess.com/full/30642.jpg',
  };


  obtenerRespuestaHjo(evento) {
    console.log(evento)
  }
}



