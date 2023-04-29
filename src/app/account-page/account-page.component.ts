import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {

  show : boolean = false;
  show1 : boolean = false;
  show2 : boolean = false;
  show3 : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
