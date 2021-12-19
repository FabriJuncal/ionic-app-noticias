import { Component, Input } from '@angular/core';

import { Article } from '../../interfaces/noticias';

// Importamos el plugin para poder identificar el dispositivo en el cual se esta utilizando la app
import { ActionSheetButton, ActionSheetController, Platform } from '@ionic/angular';

// Importamos el plugin para poder redireccionar a otra pagina desde la app
// Pagina Oficial del Plugin: https://capacitorjs.com/docs/apis/browser
import { Browser } from '@capacitor/browser';
// Importamos el plugin para poder compartir contenido a otras aplicaciones
import { Share } from '@capacitor/share';





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

  // Metodo para abrir las opciones en el Action Sheet
  async onOpenMenu(){

    console.log(this.platform.is('capacitor'));

    const btnsActionSheet: ActionSheetButton[] = [
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
    ];

    const shareBtn = {
      text: 'Compartir ',
      icon: 'share-social-outline',
      handler: () => this.onShareArticle()
    }

    if(this.platform.is('capacitor')){
      btnsActionSheet.unshift(shareBtn);
    }

    const actionSheet = await this.actionSheetCtrl.create({
      // Titulo del Action Sheet
      header: 'Opciones',
      // Boton para abrir la noticia en una nueva pagina
      buttons: btnsActionSheet
    });

    await actionSheet.present();

  }

  // Metodo para compartir el contenido de la noticia en otras aplicaciones
  async onShareArticle(){

    const { title, description, url } = this.noticia;

    console.log(this.noticia);

    await Share.share({
      title: title,
      text: description,
      url: url
    });

  }

  onToggleFavorite(){
    console.log('Favorite');
  }

}
