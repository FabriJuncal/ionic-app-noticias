// Importamos el plugin "HttpClient" para poder realizar peticiones a algunas API's
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Importamos las interfaces para tener ya definido los campos y los tipos de datos que se obtendran de la petición
import { RespuestasTitularesPrincipales } from '../interfaces/noticias';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient) { }

  getTitularesPrincipales(){
    return this.http.get<RespuestasTitularesPrincipales>(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8936c90d112d4bd1a0fcc298fcd39bec`);
  }
}
