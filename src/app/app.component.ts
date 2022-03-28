import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
declare var addList: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  ngOnInit(): void {
    new addList()

  }

  title = 'todo-list';

}
