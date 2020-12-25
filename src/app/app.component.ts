import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'SnappLogin';
  password:string
  username:string
  constructor() { }
  ngOnInit() {}
  abb(karbari: Event){this.username=(<HTMLInputElement>karbari.target).value}}
