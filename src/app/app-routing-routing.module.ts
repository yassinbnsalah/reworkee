import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './composant/accueil/accueil.component';
import { ContactComponent } from './composant/contact/contact.component';
import { DetailmaterielComponent } from './composant/detailmateriel/detailmateriel.component';
import { EurreurComponent } from './composant/eurreur/eurreur.component';
import { ListematrielComponent } from './composant/listematriel/listematriel.component';

const routes: Routes = [
  {path :'accueil'    , component:AccueilComponent},
  {path : 'informatique'     , component:ListematrielComponent},
  {path : 'contact'   , component:ContactComponent},
  {path : 'informatique/:id' , component:DetailmaterielComponent},
  {path:'', redirectTo:'accueil', pathMatch:'full'},
  {path:'**', component:EurreurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
