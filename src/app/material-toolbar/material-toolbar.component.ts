import { Component, OnInit } from '@angular/core';
import { Http, JsonpModule } from '@angular/http';

@Component({
  selector: 'app-material-toolbar',
  templateUrl: './material-toolbar.component.html',
  styleUrls: ['./material-toolbar.component.css']
})
export class MaterialToolbarComponent implements OnInit {

  myData: Array<any>;

  constructor(private http:Http) {
    this.http.get('https://jsonplaceholder.typicode.com/photos')
    .map(response => response.json())
    .subscribe(res => this.myData = res);
   }

  ngOnInit() {
  }

}
