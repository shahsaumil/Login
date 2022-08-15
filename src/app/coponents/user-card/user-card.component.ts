import { Component, OnInit, Input } from '@angular/core';
import { userCardModel } from './user-card.model'

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

user: userCardModel[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
