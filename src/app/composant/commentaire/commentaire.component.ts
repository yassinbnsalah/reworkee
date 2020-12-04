import { Component, Input, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/model/commentaire';

@Component({
  selector: 'yes-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {
@Input() com : Commentaire = new Commentaire(); 
  constructor() { }

  ngOnInit(): void {
  }

}
