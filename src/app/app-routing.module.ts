import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MaquinariaAgricolaComponent } from './pages/maquinaria-agricola/maquinaria-agricola.component';
import { CarpinteriaMetalicaComponent } from './pages/carpinteria-metalica/carpinteria-metalica.component';
import { SearchComponent } from './pages/search/search.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: '',  pathMatch: 'full', redirectTo: 'inicio' },
  { path: 'maquinaria-agricola', component: MaquinariaAgricolaComponent},
  { path: 'carpinteria-metalica', component: CarpinteriaMetalicaComponent},
  { path: 'search/:termino', component: SearchComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
