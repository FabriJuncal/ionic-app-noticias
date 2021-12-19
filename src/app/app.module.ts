import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importamos este modulo para poder realizar peticiones a alguans API's
import { HttpClientModule } from '@angular/common/http';
// Importamos el plugin para poder redireccionar a otra pagina desde la app
// import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser';



@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule, // Importamos el modulo "HttpClientModule"
    ],
    providers: [
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
        // InAppBrowser    // Importamos el plugin para poder redireccionar a otra pagina desde la app
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
