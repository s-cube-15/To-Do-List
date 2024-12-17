import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {

  todos: Todo[];
  constructor() {
    this.todos = [
      { sno: 1, title: "This is title1", desc: "Descrip1", active: true },
      { sno: 2, title: "This is title2", desc: "Descrip2", active: true },
      { sno: 3, title: "This is title3", desc: "Descrip3", active: true },
    ]
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index=this.todos.indexOf(todo)
    this.todos.splice(index,1);
  }
  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
  }
}
