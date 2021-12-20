import { Injectable } from '@angular/core';

// Importamos el plugin para almacenar los datos en el Local Storage
// Solo se eliminan los datos de Local Storage, si se desinstala la aplicación
import { Storage } from '@capacitor/storage';

import { Article } from '../interfaces/noticias';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _localArticle: Article[] = [];

  constructor() { }


  // Metodo para guardar y eliminar los datos en el Local Storage
  async saveRemoveArticle( article: Article){

    // Si el articulo existe en el Local Storage devolvemos "true"
    const exists = this._localArticle.find( localStorage => localStorage.title === article.title );

    // Si el articulo existe en el Local Storage lo eliminamos y sino lo añadimos
    if( exists ){
      this._localArticle = this._localArticle.filter( localStorage => localStorage.title !== article.title );
    }else{
      this._localArticle = [article, ...this._localArticle];
    }


    // Guardamos los datos en el Local Storage
    await Storage.set({
      key: 'article',
      value: JSON.stringify(this._localArticle)
    });

  }
}
