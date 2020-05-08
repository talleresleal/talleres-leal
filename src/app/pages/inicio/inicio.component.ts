import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html'
})
export class InicioComponent implements OnInit {

  constructor(private title: Title, private infoService: InfoPaginaService) { }

  ngOnInit(): void {
    this.title.setTitle('Talleres Leal. Cerrajería y maquinaria agrícola');
    this.infoService.cargarGaleriaCompleta();
  }

}
