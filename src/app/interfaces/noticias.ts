// Interfaz creada con la extención "JSON to TS"
// Como usar: copiar el JSON obtenido de la petición (En este caso se utilizó Postman),
//            luego se volvió a este lugar y para utilizar la extención hay dos formas.
//              1: Precionar "Ctrl+Shif+Alt+V" => Esto va a pegar todas las interfaces creadas a patir del JSON copiado
//              2: Presionar "Ctrl+P" una vez que abre el buscador agregar ">" y a continuación buscar la extención "JSON to TS" 
//                 y seleccionar la opción donde dice "Clipboard"


// Agregamos los "export's" a las interfaces para poder utilizarlas en otros archivos

export interface RespuestasTitularesPrincipales {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: Source;
  author?: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content?: string;
}

export interface Source {
  id?: string;
  name: string;
}