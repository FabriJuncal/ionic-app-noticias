import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
// Importamos los servicios que vamos a consumir
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/noticias';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{

  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  noticias: Article[] = [];
  categoria = 'business';

  constructor( private noticiasService: NoticiasService) {}


  /** Función de Ionic que se ejecuta el terminar de mostrar toda la página **/
  ionViewDidEnter() {

    // Llamamos a la función "cargarNoticias" para obtener las noticias de la categoria seleccionada
    this.noticiasService.getTitularesPrincipalesPorCategoria(this.categoria)
      .subscribe(articles => {

      console.log(articles);

      // Cargamos el array de noticias con las noticias obtenidas de la API
      this.noticias = articles;
    });

  }


  /** Función del Componente de Ionic que se ejecuta cada ves que llegamos al final del listado  (Carga mas noticias)**/
  // Quitamos el parametro "event: any" por que se utiliza el evento de renderizado de Ionic "ionViewDidEnter"
  loadData(){

    this.noticiasService.getTitularesPrincipalesPorCategoria(this.categoria, true)
      .subscribe(articles => {


        if( articles.length === this.noticias.length ){

          // Forma de acceder al componente sin tener que obtener el objeto del componente como parametro
          this.infiniteScroll.disabled = true;

          // Forma de acceder al componente obteniendo el objeto del componente como parametro
          // event.target.disabled = true;

          return;
        }

        console.log(articles);
        // Cargamos el array de noticias con las noticias obtenidas de la API
        this.noticias = articles;

        // Forma de finalizar el componente sin tener que obtener el objeto del componente como parametro
        this.infiniteScroll.complete();

        // Forma de finalizar el componente obteniendo el objeto del componente como parametro
        // event.target.complete();

      });

  }


}
