import { Component, OnInit } from '@angular/core';
import { Materiel } from 'src/app/model/materiel';
import { MaterielService } from 'src/app/srevices/materiel.service';

@Component({
  selector: 'yes-detailmateriel',
  templateUrl: './detailmateriel.component.html',
  styleUrls: ['./detailmateriel.component.css']
})
export class DetailmaterielComponent implements OnInit {
  
    identifiant :string ="" ; 
 
   
   // showing:boolean = true; 
    constructor(private materielServices : MaterielService) { }
  /* onshow()
    {
      this.showing = !this.showing; 
    }*/
    onAfficher(id:string)
    {
      this.identifiant = id ; 
      this.det = this.materielServices.getMaterielById(id) ; 
      alert(this.det); 
      return this.det ; 

    }
    showing:boolean = true; 
    onshow()
  {
    this.showing = !this.showing; 
  }   
  det:Materiel ; 
  ngOnInit(): void {
    this.det = this.materielServices.getMaterielById('2') ; 
  }

}
