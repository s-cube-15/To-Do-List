import { Component,Output,EventEmitter, Input } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { Action } from 'rxjs/internal/scheduler/Action';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  title: string="";
  desc: string="";
   @Input() todo: Todo;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  onSubmit() {
    const todo = {
      sno: 8, title: this.title, desc: this.desc, active: true
    }
    this.todoAdd.emit(todo);
  }
}
