import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  galeria: any[];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarGaleria();
  }

  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json').subscribe(
      ( resp: InfoPagina ) => {
        this.cargada = true;
        this.info = resp;
      }
    );
  }

  private cargarGaleria() {
    this.http.get('https://talleresleal-e9264.firebaseio.com/galeria.json').subscribe(
      (resp: any[]) => {
        this.galeria = resp;
      }
    );
  }

}
