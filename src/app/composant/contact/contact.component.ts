import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'yes-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router:Router) { }
  onAccueil()
  {
  this.router.navigate(['/accueil']);
  }
  ngOnInit(): void {
  }

}
