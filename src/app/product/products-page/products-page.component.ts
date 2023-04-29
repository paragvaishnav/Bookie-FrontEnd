import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})

export class ProductsPageComponent implements OnInit {
  ngOnInit(): void {
  }

  task: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Magazines', completed: false, color: 'primary'},
      {name: 'Higer Education Books', completed: false, color: 'accent'},
      {name: 'CBSE Book', completed: false, color: 'warn'},
      {name: 'ICBE Book', completed: false, color: 'warn'},
      {name: 'GSBC Book', completed: false, color: 'warn'},
      {name: 'Comics Book', completed: false, color: 'warn'}
    ],
  };
  task1: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'English', completed: false, color: 'primary'},
      {name: 'Gujarat', completed: false, color: 'accent'},
      {name: 'Marathi', completed: false, color: 'warn'},
      {name: 'Malayam', completed: false, color: 'warn'},
      {name: 'Telugu', completed: false, color: 'warn'},
      {name: 'kanada', completed: false, color: 'warn'}
    ],
  };

  allComplete: boolean = false;
  allComplete1: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }
  updateAllComplete1() {
    this.allComplete1 = this.task1.subtasks != null && this.task1.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  someComplete1(): boolean {
    if (this.task1.subtasks == null) {
      return false;
    }
    return this.task1.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }
  setAll1(completed: boolean) {
    this.allComplete1 = completed;
    if (this.task1.subtasks == null) {
      return;
    }
    this.task1.subtasks.forEach(t => (t.completed = completed));
  }
}
