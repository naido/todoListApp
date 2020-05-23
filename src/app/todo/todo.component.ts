import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:number
  todo: Todo

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(){
    this.id = this.route.snapshot.params['id']
    this.todo = new Todo(this.id,'',false, new Date())

    if(this.id != -1) {
      this.todoService.retrieveTodo('naido', this.id).subscribe(
        data => this.todo = data
      )
    }
  }

  saveToDo() {
    if(this.id === -1) {
      this.todoService.createTodo('naido', this.todo).subscribe(
        data => {
          this.router.navigate(['todos'])
        }
      )
    } else {  
      this.todoService.updateTodo('naido', this.id, this.todo).subscribe(
        data => {
          this.router.navigate(['todos'])
        }
      )
    }
  }

}
