import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TodoService} from '../todo.service';
import {DialogDeleteComponent} from '../dialog-delete/dialog-delete.component';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();

  constructor(public todoService: TodoService, public dialog: MatDialog, public router: Router) {
  }

  ngOnInit() {
    this.showAll();
  }

  showAll() {
    this.todoService.getAll().subscribe(data => {
      this.todos = data;
    });
  }

  toggleTodo(i: number) {
    const todo = this.todos[i];
    todo.complete =  !todo.complete;
    this.todoService.edit(this.todos[i], this.todos[i].id).subscribe(next => {
      this.todos[i].complete = next.complete;
    });
  }

  openDialog(id: any): void {
    this.todoService.findById(id).subscribe(dataDialog => {
      const dialogRef = this.dialog.open(DialogDeleteComponent, {
        width: '500px',
        data: {name: dataDialog},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(() => {
        this.ngOnInit();
      });
    });
  }
}
