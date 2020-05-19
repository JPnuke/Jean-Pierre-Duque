import { HomeComponent } from './inicio/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProviderAst } from '@angular/compiler';

const rutas: Routes = [
  {
    path: 'inicio',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  providers: [],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutesComponent {

}
