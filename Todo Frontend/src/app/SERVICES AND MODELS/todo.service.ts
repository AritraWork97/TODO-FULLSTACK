import Todo  from './todo.model';

import { Observable } from 'rxjs/rx'
import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()


export class todoService {
    api_url = 'http://localhost:3000';
  todoUrl = `${this.api_url}/api/todos`;

  constructor(
    private http: HttpClient
  ) { }

  createTodo(todo: Todo): Observable<any>{
    //returns the observable of http post request 
    return this.http.post(`${this.todoUrl}`, todo);
  }

  getToDos(): Observable<Todo[]>{
    return this.http.get(this.todoUrl)
    .map(res  => {
      //Maps the response object sent from the server
        
      return res["data"].docs as Todo[];
    })
  }

  editTodo(todo:Todo){
    let editUrl = `${this.todoUrl}`
    //returns the observable of http put request 
    return this.http.put(editUrl, todo);
  }

  deleteTodo(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.todoUrl}/${id}`
    return this.http.delete(deleteUrl)
    .map(res  => {
      return res;
    })
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}