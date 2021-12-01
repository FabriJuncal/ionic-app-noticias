import { Component, OnInit } from '@angular/core';
// Importamos los servicios que vamos a consumir
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/noticias';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  noticias: Article[] = [];

  constructor( private noticiasService: NoticiasService) {}


  // Al iniciar la pagina ejecutamos el servicio "noticiasService" para traer los datos de los Titulares Principales
  ngOnInit(){
    this.noticiasService.getTitularesPrincipales()
      .subscribe( articles => {
        console.log('noticias', articles);

        // Almacenamos las noticias en un Array
        // "...": significa que se hará una copia del array y se agregará el nuevo
        this.noticias.push(...articles);
      });


  }


}
