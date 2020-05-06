import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { PaginationInstance } from 'ngx-pagination';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-carpinteria-metalica',
  templateUrl: './carpinteria-metalica.component.html'
})
export class CarpinteriaMetalicaComponent implements OnInit {

  constructor(public infoService: InfoPaginaService, private title: Title) { }

  public maxSizePagination = '10';

  public paginationConfig: PaginationInstance = {
    id: 'advanced',
    itemsPerPage: 8,
    currentPage: 1
  };

  public labels: object = {
    previousLabel: 'Anterior',
    nextLabel: 'Siguiente',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `Estás en la página`
  };

  public onPageChange(numero: number) {
    this.paginationConfig.currentPage = numero;
  }

  ngOnInit() {
    this.title.setTitle('Talleres Leal - Estructuras metálicas');
    this.infoService.cargarGaleria('carpinteria');
  }

}
