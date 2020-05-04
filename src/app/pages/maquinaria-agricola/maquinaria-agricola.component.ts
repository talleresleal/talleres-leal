import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-maquinaria-agricola',
  templateUrl: './maquinaria-agricola.component.html',
  styleUrls: ['./maquinaria-agricola.component.css']
})
export class MaquinariaAgricolaComponent implements OnInit {

  constructor(public infoService: InfoPaginaService) { }

  ngOnInit(): void {
  }

}
