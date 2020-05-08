import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { Galeria } from '../interfaces/galeria.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  cargando = true;
  cargandoSeccion = true;
  galeria: Galeria[];
  imagenesFiltrado: Galeria[];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarGaleriaCompleta();
  }

  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json').subscribe(
      ( resp: InfoPagina ) => {
        this.cargada = true;
        this.info = resp;
      }
    );
  }

  public cargarGaleria(seccion: string) {
    return new Promise( ( resolve, reject ) => {
      this.http.get('https://talleresleal-e9264.firebaseio.com/galeria.json').subscribe(
        (resp: Galeria[]) => {
          this.galeria = resp.filter(
            imagen => imagen.seccion === seccion
          );
          this.cargandoSeccion = false;
          resolve();
        }
      );
    });
  }

  public cargarGaleriaCompleta() {
    return new Promise( ( resolve, reject ) => {
      this.http.get('https://talleresleal-e9264.firebaseio.com/galeria.json').subscribe(
        (resp: Galeria[]) => {
          this.galeria = resp;
          this.cargando = false;
          resolve();
        }
      );
    });
  }

  buscar( termino: string) {
    if (this.galeria.length === 0) {
      this.cargarGaleriaCompleta().then( () => {
        this.filtrarImagenes( termino );
      });
    } else {
      this.filtrarImagenes( termino );
    }
  }

  private filtrarImagenes( termino: string ) {
    this.imagenesFiltrado = [];
    termino.toLowerCase();

    this.galeria.forEach( imagen => {
      const fraseLower = imagen.frase.toLowerCase();
      if ( imagen.frase.indexOf( termino ) >= 0 || fraseLower.indexOf( termino ) >= 0) {
        this.imagenesFiltrado.push(imagen);
      }
    });
  }

}
