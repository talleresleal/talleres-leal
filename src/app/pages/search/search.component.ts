import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               public infoService: InfoPaginaService ) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      params => {
        this.infoService.buscar(params.termino);
      }
    );
  }

}
