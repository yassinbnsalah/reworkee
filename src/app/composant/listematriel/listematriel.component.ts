import { Component, OnInit } from '@angular/core';
import { Materiel } from 'src/app/model/materiel';
import { MaterielService } from 'src/app/srevices/materiel.service';

@Component({
  selector: 'yes-listematriel',
  templateUrl: './listematriel.component.html',
  styleUrls: ['./listematriel.component.css']
})
export class ListematrielComponent implements OnInit {
  materiel : Materiel[] ; 
  constructor(private materielServices : MaterielService) { }
 
  ngOnInit(): void {
   this.materiel =  this.materielServices.getMateriels() ; 
  }

}
