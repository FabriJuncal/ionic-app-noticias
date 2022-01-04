import { Component, Input } from '@angular/core';

// Importamos el plugin para poder identificar el dispositivo en el cual se esta utilizando la app
import { ActionSheetButton, ActionSheetController, Platform } from '@ionic/angular';

// Importamos el plugin para poder redireccionar a otra pagina desde la app
// Pagina Oficial del Plugin: https://capacitorjs.com/docs/apis/browser
import { Browser } from '@capacitor/browser';
// Importamos el plugin para poder compartir contenido a otras aplicaciones
import { Share } from '@capacitor/share';

// Importamos la Interfaz del Articulo
import { Article } from '../../interfaces/noticias';

// Importamos el servicio para poder guardar y eliminar los articulos en el Local Storage
import { StorageService } from '../../services/storage.service';




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
    private actionSheetCtrl: ActionSheetController,
    private storageService: StorageService
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

    // Verificamos si el artituclo ya esta guardado en Favoritos y obtenemos un valo booleano
    const articleInFavorite = this.storageService.articleInFavorites(this.noticia);


    // Creamos los botónes que tendrá el Action Sheet
    const btnsActionSheet: ActionSheetButton[] = [
      {
        text: articleInFavorite ? 'Remover Favorito' :'Favorito',
        icon: articleInFavorite ? 'heart' : 'heart-outline',
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

    // Si en el dispositivo se utiliza capacitor se agrega el boton de compartir
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

    // Destructuramos el objeto noticia para poder acceder a sus propiedades
    const { title, description, url } = this.noticia;

    console.log(this.noticia);

    // Ejecutamos el plugin Share para poder compartir el contenido de la noticia.
    // El metodo .share() hace que se muestre el modal de compartir en otras aplicaciones
    await Share.share({
      title: title,
      text: description,
      url: url
    });

  }

  // Metodo para guardar y eliminar los datos en el Local Storage
  onToggleFavorite(){
    // Guardamos o eliminamos el articulo en el Local Storage
    this.storageService.saveRemoveArticle(this.noticia);
    
  }

}
