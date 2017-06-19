import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-placeholder-cards',
  templateUrl: './placeholder-cards.component.html',
  styleUrls: ['./placeholder-cards.component.css']
})
export class PlaceholderCardsComponent implements OnInit {
  myData: Array<any>;

  constructor(private http:Http) {
    this.http.get('https://jsonplaceholder.typicode.com/photos')
    .map(response => response.json())
    .subscribe(res => this.myData = res);
   }

  ngOnInit() {
  }

}
