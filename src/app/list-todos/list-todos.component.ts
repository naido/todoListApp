import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

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

  successMessage = ''

  todos: Todo[]
/*     {id : 1, description : 'Learn to play guitar'},
    {id : 2, description : 'Learn Spring Framework'},
    {id : 3, description : 'Learn to sing'} */

    /*    new Todo(1, 'Learn to play guitar', false, new Date()),
    new Todo(2, 'Learn Spring Frameworkkk', false, new Date()),
    new Todo(3, 'Learn to sing', false, new Date())
  ]*/
  
  constructor(
    private toDoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.toDoService.retrieveAllTodos('naido').subscribe(
      response => {
        console.log(response);
        this.todos=response;  
      }
  )
  }

  deleteTodo(id) {
    console.log(`delete todo ${id}`);
    this.toDoService.deleteTodo('naido', id).subscribe(
      response => {
        this.successMessage = 'Todo successfully removed'
        this.loadTodos();
      }
    )
  }

  updateTodo(id) {
    console.log(`update todo ${id}`);
    this.router.navigate(['todos', id])
  }

  createTodo() {
    this.router.navigate(['todos', -1])
  }
}
