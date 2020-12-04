import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeemployeComponent } from './listeemploye/listeemploye.component';
import { SpecialemployeComponent } from './specialemploye/specialemploye.component';
import { AccueilComponent } from './composant/accueil/accueil.component';
import { ListematrielComponent } from './composant/listematriel/listematriel.component';
import { MatrielComponent } from './composant/matriel/matriel.component';
import { DetailmaterielComponent } from './composant/detailmateriel/detailmateriel.component';
import { CommentaireComponent } from './composant/commentaire/commentaire.component';


@NgModule({
  declarations: [
    AppComponent,
    ListeemployeComponent,
    SpecialemployeComponent,
    AccueilComponent,
    ListematrielComponent,
    MatrielComponent,
    DetailmaterielComponent,
    CommentaireComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
