import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'font-end';

  tituloPadre = 'soy tu padre hola';
  nombreBotonPadre = 'alertar!!!!!!!!';
  imagenPadre = 'https://as01.epimg.net/meristation/imagenes/2019/01/08/reportajes/1546933662_826942_1546935400_noticia_normal.jpg';

  datosHijo = {
  tituloPadre: 'soy tu padre hola',
  nombreBotonPadre: 'alertar!!!!!!!!',
  imagenPadre: 'https://as01.epimg.net/meristation/imagenes/2019/01/08/reportajes/1546933662_826942_1546935400_noticia_normal.jpg',
  };

  obtenerRespuestaHjo(evento) {
    console.log(evento);
  }
}




