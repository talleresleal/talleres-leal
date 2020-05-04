import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-carpinteria-metalica',
  templateUrl: './carpinteria-metalica.component.html',
  styleUrls: ['./carpinteria-metalica.component.css']
})
export class CarpinteriaMetalicaComponent implements OnInit {

  constructor(public infoService: InfoPaginaService) { }

  ngOnInit(): void {
  }

}
