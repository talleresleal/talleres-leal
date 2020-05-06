import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html'
})
export class InformacionComponent implements OnInit {

  constructor( public servicio: InfoPaginaService ) { }

  ngOnInit(): void {
  }

}
