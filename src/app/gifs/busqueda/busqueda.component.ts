import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../Services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {


  @ViewChild ('txtBuscar') txtbuscar!:ElementRef<HTMLInputElement>;

  constructor( private historia: GifsService){

  }

  buscar ( termino : string){

    const valor = this.txtbuscar.nativeElement.value;

    if(valor.trim().length === 0){
      return;
    }

    this.historia.buscarGifs( valor );

    this.txtbuscar.nativeElement.value = '';

  }

}
