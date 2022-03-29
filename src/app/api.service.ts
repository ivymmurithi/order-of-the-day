import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

// observable
// A producer of multiple values, which it pushes 
// to subscribers. Used for asynchronous event 
// handling throughout Angular. You execute an 
// observable by subscribing to it with its 
// subscribe() method, passing callbacks for 
// notifications of new values, errors, or 
// completion.

  // baseUrl = "http://127.0.0.1:8000/todos/?format=api";
  baseUrl = "http://127.0.0.1:8000/todos/"

  httpOptions = {
  mode: 'cors',
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // Authorization: 'my-auth-token'
  })
};

  constructor(private http: HttpClient) { }

  // GET request
  getTodos() {
    return this.http.get<any>(this.baseUrl)
  }

  // POST request
  postTodos(addedTodo: any) {
    return this.http.post<any>(this.baseUrl, JSON.stringify(addedTodo), this.httpOptions)
  }

}
