// Importamos el plugin "HttpClient" para poder realizar peticiones a algunas API's
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

// Importamos las interfaces para tener ya definido los campos y los tipos de datos que se obtendran de la petición
import { RespuestasTitularesPrincipales, Article, NoticiasPorCategoriaYPagina } from '../interfaces/noticias';

// Importamos el operador map, de los operadores de RXJS
import{ map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private NoticiasPorCategoriaYPagina: NoticiasPorCategoriaYPagina = {}

  constructor( private http: HttpClient) { }

  private executeQuery<T>( endpoint: string){

    console.log('Petición HTTP realizada');

    return this.http.get<T>(`${ apiUrl }${ endpoint }`,{
      params: {
        apiKey: apiKey,
        country: 'us'
      }
    })
  }


  /** Obtenemos las Noticias Destacadas **/
  // Utilizamos la API de "https://newsapi.org/" donde podemos obtener y filtrar las noticias
  // :Observable<Article[] => Definimos el tipo de respuesta de la función y declaramos
  //  que utilizará la Interfaz de "Article" y que será de tipo Array
  // eslint-disable-next-line @typescript-eslint/member-ordering
  getTitularesPrincipales():Observable<Article[]>{

    /** Mostramos la categoría "Business"  utilizando la función que muestra las Noticias por Categoría
     *  y tiene la función de no recargar los datos si estas noticias ya se obtuvieron anteriormente**/
    return this.getTitularesPrincipalesPorCategoria('business');

    // return this.executeQuery<RespuestasTitularesPrincipales>('/top-headlines?category=business')
    // .pipe( // Utilizamos el metodo "pipe" para utilizar la función map en la respuesta de la petición
    //   // Utilizamos la función "map" para dar formato a la respuesta de la petición
    //   map( ({ articles }) => articles) // Formateamos la respuesta de la petición utilizando Destructuring
    // );
  }

  /** Obtenemos las Noticias por Categoria y si ya se Cargaron anteriormente,
   *  toma las que se encuentran en memoria (en el objeto) para no volver a realizar una petición **/
  // eslint-disable-next-line @typescript-eslint/member-ordering
  getTitularesPrincipalesPorCategoria(categoria: string, cargarMas: boolean = false): Observable<Article[]>{


    /** Si que quiere cargar mas Noticias, se realiza una petición a la API **/
    if( cargarMas ){
      return this.getNoticiasPorCategoria(categoria);
    }

    /** Si no se quiere cargar mas Noticias y ya existen cargadas, se muestra las Noticias almacenadas (en el objeto) en memoria **/
    if( this.NoticiasPorCategoriaYPagina[categoria] ){

      // Función RxJS llamada "of()", esta función nos permite crear un Observable
      // para obtener una respuesta simulada sin crear un backend real, ya que los datos
      // que estamos obteniendo se encuentran en la memoria del dispositivo y no en un servidor.
      return of(this.NoticiasPorCategoriaYPagina[categoria].articles);
    }

    /** Si no se quiere cargar noticias nuevas, pero nose encuentran cargadas en memoria, se muestras noticias nuevas **/
    return this.getNoticiasPorCategoria(categoria);

    // return this.executeQuery<RespuestasTitularesPrincipales>(`/top-headlines?category=${categoria}`)
    //   .pipe( // Utilizamos el metodo "pipe" para utilizar la función map en la respuesta de la petición
    //   // Utilizamos la función "map" para dar formato a la respuesta de la petición
    //   map( ({ articles }) => articles) // Formateamos la respuesta de la petición utilizando Destructuring
    // );
  }


  /** Obtiene las Noticias Por Categiría desde la API **/
  private getNoticiasPorCategoria( categoria: string ): Observable<Article[]>{

    if( Object.keys( this.NoticiasPorCategoriaYPagina).includes(categoria) ){
      // Si existe
    }else{
      // No existe

      this.NoticiasPorCategoriaYPagina[categoria] = {
        page: 0,
        articles: []
      };
    }

    const page = this.NoticiasPorCategoriaYPagina[categoria].page + 1;

    return this.executeQuery<RespuestasTitularesPrincipales>(`/top-headlines?category=${categoria}&page=${page}`)
    .pipe(
      map( ({ articles }) => {

        if( articles.length === 0 ){
          return this.NoticiasPorCategoriaYPagina[categoria].articles;
        } 


        this.NoticiasPorCategoriaYPagina[categoria] = {
          page,
          // eslint-disable-next-line max-len
          articles: [...this.NoticiasPorCategoriaYPagina[categoria].articles, ...articles] // Destructuramos los articulos anteriores y se agrega los nuevos
        }

        return  this.NoticiasPorCategoriaYPagina[categoria].articles;

      })
    );


  }

}
