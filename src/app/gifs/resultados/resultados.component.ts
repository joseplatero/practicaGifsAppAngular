import { Component } from '@angular/core';
import { GifsService } from '../Services/gifs.service';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent  {

    get resultados() {
    return this.gifsServices.resultados;
  }

  constructor( private gifsServices: GifsService) { }


}
