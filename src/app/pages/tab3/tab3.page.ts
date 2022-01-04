import { Component } from '@angular/core';
import { Article } from '../../interfaces/noticias';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

    // Metodo para obtener las noticias guardadas como favorito en el Local Storage
    // get: Metodo Especial que Escucha los cambios en el Local Storage y devuelve los datos cuando este detecte algún cambio
    // En los metodos especiales "get" no es necesario utilizas los parentecis ()
    get noticias(): Article[]{
      // En los metodos especiales "get" no es necesario utilizas los parentecis ()
      return this.storageService.getLocalArticles;
    }

    // Inyectamos el servicio StorageService
    constructor( private storageService: StorageService ) {}

    /** Función de Ionic que se ejecuta el terminar de mostrar toda la página **/
    ionViewDidEnter() {
      // Cargamos los datos del Local Storage los cuales son las Noticias almacenadas como Favorito
      this.storageService.loadFavorite();
    };
  
}


