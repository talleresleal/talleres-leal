import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { Title } from '@angular/platform-browser';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               public infoService: InfoPaginaService,
               private title: Title ) { }

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


  ngOnInit(): void {
    this.title.setTitle('Talleres Leal - Búsqueda');

    this.route.params.subscribe(
      params => {
        this.infoService.buscar(params.termino);
      }
    );
  }

}
