import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


  ngOnInit(): void {

    $(document).ready(function() {
      $("#addBtn").click(function(event:any) {
        event.preventDefault();
          let userInput = $('#todoInput').val();
          $('#todoInput').val('');
          let btn = `<button class="btn btn-outline-dark listdelete"><i class="fa fa-solid fa-trash"></i></button>`;
          let completed =`<button class="btn btn-outline-dark listcomplete"><i class="fa fa-solid fa-check"></i></button>`;
          $("#showlists").append("<div><li>" + userInput + " " + btn + " " + completed + "</li></div>");
          console.log(userInput)
      });
    });

  }

  title = 'todo-list';

}
