import { Component, OnInit } from '@angular/core';
import {Task} from "../../share/interfaces/task";
// import {MyMockTasks} from "../../share/mocks/mock-tasks";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  currentTask = {} as Task;
  changeTask:Task;

  tasks: Task[] = [];

  clickSelectTask (task: Task): void {
    this.changeTask = task;
  }

  clickSaveTask(): void{
    this.tasks.push(this.currentTask);
    this.currentTask = {} as Task;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
