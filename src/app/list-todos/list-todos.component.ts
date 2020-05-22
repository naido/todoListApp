import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date 
  ){
    
  }

}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]
/*     {id : 1, description : 'Learn to play guitar'},
    {id : 2, description : 'Learn Spring Framework'},
    {id : 3, description : 'Learn to sing'} */

    /*    new Todo(1, 'Learn to play guitar', false, new Date()),
    new Todo(2, 'Learn Spring Frameworkkk', false, new Date()),
    new Todo(3, 'Learn to sing', false, new Date())
  ]*/
  
  constructor(
    private toDoService: TodoDataService
  ) { }

  ngOnInit(): void {
    this.toDoService.retrieveAllTodos('naido').subscribe(
        response => {
          console.log(response);
          this.todos=response;  
        }
    )
  }

}
