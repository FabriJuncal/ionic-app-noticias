// Importamos el plugin "HttpClient" para poder realizar peticiones a algunas API's
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

// Importamos las interfaces para tener ya definido los campos y los tipos de datos que se obtendran de la petición
import { RespuestasTitularesPrincipales, Article } from '../interfaces/noticias';

// Importamos el operador map, de los operadores de RXJS
import{ map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient) { }


  // Utilizamos la API de "https://newsapi.org/" donde podemos obtener y filtrar las noticias
  // :Observable<Article[] => Definimos el tipo de respuesta de la función y declaramos
  //  que utilizará la Interfaz de "Article" y que será de tipo Array
  getTitularesPrincipales():Observable<Article[]>{
    return this.http.get<RespuestasTitularesPrincipales>(`https://newsapi.org/v2/top-headlines?country=us&category=business`,{
      params:{
        apiKey // Enviamos como parametro del GET la ApiKey
      }
    }).pipe( // Utilizamos el metodo "pipe" para utilizar la función map en la respuesta de la petición
      // Utilizamos la función "map" para dar formato a la respuesta de la petición
      map( ({ articles }) => articles) // Formateamos la respuesta de la petición utilizando Destructuring
    );
  }

  getTitularesPrincipalesPorCategoria(categoria:string):Observable<Article[]>{
    return this.http.get<RespuestasTitularesPrincipales>(`https://newsapi.org/v2/top-headlines?country=us&category=${categoria}`,{
      params:{
        apiKey // Enviamos como parametro del GET la ApiKey
      }
    }).pipe( // Utilizamos el metodo "pipe" para utilizar la función map en la respuesta de la petición
      // Utilizamos la función "map" para dar formato a la respuesta de la petición
      map( ({ articles }) => articles) // Formateamos la respuesta de la petición utilizando Destructuring
    );
  }
}
