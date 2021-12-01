import { Component, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    // Declaramos un "ViewChild" para controlar un componente hijo, en este caso el "IonSegment"
    @ViewChild(IonSegment) segment: IonSegment;
    publisher = '';

  // Tipos de categorias obtenidas de la API "https://newsapi.org/"
  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

  constructor() {}

  // Función de Ionic que se ejecuta el terminar de mostrar toda la página
  ionViewDidEnter() {

    // Seleccionamos la 1ra opción como predeterminada en las opciones seleccionables del encabezado
    this.segment.value = this.categorias[0];
  }

  segmentChanged(event: any){
    this.segment.value = event.detail.value;
  }
  

}
