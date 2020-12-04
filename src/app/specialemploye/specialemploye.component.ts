import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'yes-specialemploye',
  templateUrl: './specialemploye.component.html',
  styleUrls: ['./specialemploye.component.css']
})
export class SpecialemployeComponent implements OnInit {
  poste: string ="";
  employes: Employe[];
  constructor(private employeService:EmployeService) { }
lister(poste :string)
{
   this.poste = poste ; 
   this.employes =  this.employeService.getSpecialEmployes(poste) ; 
   return this.employes ;
}
  ngOnInit(): void {
  }

}
