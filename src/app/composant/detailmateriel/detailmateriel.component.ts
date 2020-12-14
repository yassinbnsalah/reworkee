import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Materiel } from 'src/app/model/materiel';
import { MaterielService } from 'src/app/srevices/materiel.service';

@Component({
  selector: 'yes-detailmateriel',
  templateUrl: './detailmateriel.component.html',
  styleUrls: ['./detailmateriel.component.css']
})
export class DetailmaterielComponent implements OnInit {
  
    identifiant :string ="" ; 
    constructor(private router:Router,private activatedRoute:ActivatedRoute,private materielServices : MaterielService) { }
  
    
    showing:boolean = true; 
    onshow()
  {
    this.showing = !this.showing; 
  }  
  onRetour()
  {
  this.router.navigate(['/informatique']);
  } 
  det:Materiel ; 
  ngOnInit(): void {
   // 
   this.identifiant = this.activatedRoute.snapshot.params['id'];
   this.det = this.materielServices.getMaterielById(this.identifiant); 
  }

}
