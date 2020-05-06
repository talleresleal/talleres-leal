import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MaquinariaAgricolaComponent } from './pages/maquinaria-agricola/maquinaria-agricola.component';
import { CarpinteriaMetalicaComponent } from './pages/carpinteria-metalica/carpinteria-metalica.component';
import { SearchComponent } from './pages/search/search.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { InformacionComponent } from './pages/informacion/informacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    MaquinariaAgricolaComponent,
    CarpinteriaMetalicaComponent,
    SearchComponent,
    InformacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
