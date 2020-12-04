import { Component, Input, OnInit } from '@angular/core';
import { Materiel } from 'src/app/model/materiel';

@Component({
  selector: 'yes-matriel',
  templateUrl: './matriel.component.html',
  styleUrls: ['./matriel.component.css']
})
export class MatrielComponent implements OnInit {
  @Input() mat: Materiel = new Materiel();
  constructor() { }

  ngOnInit(): void {
  }

}
