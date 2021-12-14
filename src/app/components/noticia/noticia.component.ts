import { Component, Input } from '@angular/core';

import { Article } from '../../interfaces/noticias';

// Importamos el plugin para poder redireccionar a otra pagina desde la app
import { Browser } from '@capacitor/browser';
// Importamos el plugin para poder identificar el dispositivo en el cual se esta utilizando la app
import { Platform } from '@ionic/angular';





@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent{

  @Input() noticia: Article;
  @Input() index: number;

  constructor(private platform: Platform) { }

  onClick(){
    console.log('Click en noticia: ');
  }

  // Metodo para abrir la noticia en una nueva pagina
  openArticle(){

    // Si el dispositivo es un movil
    if(this.platform.is('ios') || this.platform.is('android')){
      // Creamos una nueva instancia de la clase Browser
      const openCapacitorSite = async () => {
        await Browser.open({ url: this.noticia.url});
      };
      // Llamamos al metodo y le pasamos la url de la noticia que queremos abrir en una nueva pagina web en el navegador de la app móvil
      openCapacitorSite();
    }

    // Si el dispositivo es un PC
    window.open( this.noticia.url, '_blank' );


  }

}
