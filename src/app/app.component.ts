import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
declare var $: any;
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  // Because the service method returns an 
  // Observable of configuration data, the 
  // component subscribes to the method's 
  // return value. 

  public todos:any[]=[];

  constructor(private apiService: ApiService) {}

  showTodos() {
    this.apiService.getTodos()
    .subscribe((data:any) => {
      this.todos = data;
      console.log(data);
    });
  }

  ngOnInit(): void {

    this.showTodos();

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

        $("#showlists").on("click", ".listdelete", function() {
            $(this).parent().remove();
        });
    });

  }

  title = 'todo-list';

}
