import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';
//import { EmployeService } from '../Employe.service';
@Component({
  selector: 'app-listeemploye',
  templateUrl: './listeemploye.component.html',
  styleUrls: ['./listeemploye.component.css']
})
export class ListeemployeComponent implements OnInit {
  lesemployes: Employe[]; 

  constructor(private employeService:EmployeService) { }

  ngOnInit(): void {
    this.lesemployes = this.employeService.getEmployes();
  }
}
