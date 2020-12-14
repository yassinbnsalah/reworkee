import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListeemployeComponent } from './listeemploye/listeemploye.component';
import { SpecialemployeComponent } from './specialemploye/specialemploye.component';
import { AccueilComponent } from './composant/accueil/accueil.component';
import { ListematrielComponent } from './composant/listematriel/listematriel.component';
import { MatrielComponent } from './composant/matriel/matriel.component';
import { DetailmaterielComponent } from './composant/detailmateriel/detailmateriel.component';
import { CommentaireComponent } from './composant/commentaire/commentaire.component';
import { ContactComponent } from './composant/contact/contact.component';
import { EurreurComponent } from './composant/eurreur/eurreur.component';
import { MenuComponent } from './composant/menu/menu.component';
import { AppRoutingModule } from './app-routing-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ListeemployeComponent,
    SpecialemployeComponent,
    AccueilComponent,
    ListematrielComponent,
    MatrielComponent,
    DetailmaterielComponent,
    CommentaireComponent,
    ContactComponent,
    EurreurComponent,
    MenuComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
