import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/Services/gifs.service';
import { GifsModule } from '../../gifs/gifs.module';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  constructor( private gifsService : GifsService) { }

  ngOnInit(): void {
  }


  get historial() {

    return this.gifsService.historial;

  }
  buscar( H : string){

    this.gifsService.buscarGifs( H );
    
  }

}
