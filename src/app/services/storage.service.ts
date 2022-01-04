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

  // Metodo Especial que devuelve los datos del Local Storage
  get getLocalArticles(){
    return [...this._localArticle];
  }

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

  // Metodo para obtener los datos del Local Storage
  async loadFavorite(){
      
    try{
      // Cargamos los datos del Local Storage
      const load = await Storage.get({ key: 'article' });

      console.log(load);
  
      // Si existen datos los añadimos a la variable
      if( load.value ){
        this._localArticle = JSON.parse(load.value);
      }

    }catch( error ){
      console.log('Error al obtener los datos del Local Storage', error);
    }
  
  }

  // Metodo para verificar si el articulo ya se encuentra dentro de los favoritos
  articleInFavorites( article: Article ){
    // Comparamos el titulo del articulo con los del Local Storage
    // Utilizamos la doble negación para retornar un  valor booleano
    return !!this._localArticle.find( localStorage => localStorage.title === article.title );
  }

}
