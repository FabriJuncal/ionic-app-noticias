import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importamos este modulo para poder realizar peticiones a alguans API's
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
// Importamos el plugin para poder redireccionar a otra pagina desde la app
// import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser';



@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: environment.production,
          // Register the ServiceWorker as soon as the app is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000'
        }), // Importamos el modulo "HttpClientModule"
    ],
    providers: [
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
        // InAppBrowser    // Importamos el plugin para poder redireccionar a otra pagina desde la app
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
