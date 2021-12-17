import { Component, Input } from '@angular/core';

import { Article } from '../../interfaces/noticias';

// Importamos el plugin para poder redireccionar a otra pagina desde la app
// Pagina Oficial del Plugin: https://capacitorjs.com/docs/apis/browser
import { Browser } from '@capacitor/browser';
// Importamos el plugin para poder identificar el dispositivo en el cual se esta utilizando la app
import { ActionSheetController, Platform } from '@ionic/angular';





@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent{

  @Input() noticia: Article;
  @Input() index: number;

  constructor(
    private platform: Platform,
    private actionSheetCtrl: ActionSheetController
  ) { }

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

  // Metdo para abrir las opciones en el Action Sheet
  async onOpenMenu(){

    const actionSheet = await this.actionSheetCtrl.create({
      // Titulo del Action Sheet
      header: 'Opciones',
      // Boton para abrir la noticia en una nueva pagina
      buttons: [
        {
          text: 'Compartir ',
          icon: 'share-social-outline',
          handler: () => this.onShareArticle()
        },
        {
          text: 'Favorito',
          icon: 'heart-outline',
          handler: () => this.onToggleFavorite()
        },
        {
          text: 'Cancelar',
          icon: 'close-outline',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();

  }

  onShareArticle(){
    console.log('Share');
  }

  onToggleFavorite(){
    console.log('Favorite');
  }

}
