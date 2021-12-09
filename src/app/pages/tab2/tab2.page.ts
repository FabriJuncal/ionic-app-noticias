import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonSegment } from '@ionic/angular';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/noticias';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    // ViewChild: se utiliza para obtener una referencia a un elemento de la página
    // (Se lo puede referenciar por ID, Clase, Nombre del Componente, Etc)
    // (Tener en cuenta que si tenemos dos componentes con el mismo nombre,
    // se controlará los dos componentes, en este caso referenciar por ID)
    // una ves referenciado, se puede acceder a las propiedades del Componente
    // { static: true }: Se lo agrega para que se inicialice el componente en el momento que se cargue la página
    // (Ya que al utilizar el evento "ngOnInit" no se inicializa el componente)
    @ViewChild(IonSegment, { static: true } ) categoriaSeleccionada: IonSegment;
    @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;

    publisher = '';
    noticias: Article[] = [];

  // Tipos de categorias obtenidas de la API "https://newsapi.org/"
  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

  constructor(private noticiasService: NoticiasService) {}

  /** Función de Ionic que se ejecuta el terminar de mostrar toda la página **/
  ionViewDidEnter() {

    // Seleccionamos la 1ra opción como predeterminada en las opciones seleccionables del encabezado
    this.categoriaSeleccionada.value = this.categorias[0];

    // Llamamos a la función "cargarNoticias" para obtener las noticias de la categoria seleccionada
    this.noticiasService.getTitularesPrincipalesPorCategoria(this.categoriaSeleccionada.value)
      .subscribe(articles => {

      console.log(articles);

      // Cargamos el array de noticias con las noticias obtenidas de la API
      this.noticias = articles;
    });

  }

  /** Función del Componente de Ionic que se ejecuta cada ves que seleccionamos una opción del Segmento  (Categorias)**/
  segmentChanged(event: any){
    this.categoriaSeleccionada.value = event.detail.value;

    // Llamamos a la función "cargarNoticias" para obtener las noticias de la categoria seleccionada
    this.noticiasService.getTitularesPrincipalesPorCategoria(this.categoriaSeleccionada.value)
      .subscribe(articles => {
      console.log(articles);
      // Cargamos el array de noticias con las noticias obtenidas de la API
      this.noticias = articles;
    });
  }

  /** Función del Componente de Ionic que se ejecuta cada ves que llegamos al final del listado  (Carga mas noticias)**/
  // Quitamos el parametro "event: any" por que se utiliza el evento de renderizado de Ionic "ionViewDidEnter"
  loadData(){

    this.noticiasService.getTitularesPrincipalesPorCategoria(this.categoriaSeleccionada.value, true)
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
