import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-angular';
  esconderHola = false;
  arregloNumeros = [{ nombre: 'jean' }, { apellido: 'pierre' }];
  eventoClick() {
    this.esconderHola = true;
  }
}
