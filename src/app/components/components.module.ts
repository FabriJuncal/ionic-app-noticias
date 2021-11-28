import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NoticiasComponent } from "./noticias/noticias.component";
import { NoticiaComponent } from "./noticia/noticia.component";
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [
        NoticiaComponent,
        NoticiasComponent],
    exports: [
        NoticiasComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ]
})
export class ComponetsModule { }