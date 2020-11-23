import { Component, OnInit } from '@angular/core';
import {Task} from "../../share/interfaces/task";
import {MyMockTasks} from "../../share/mocks/mock-tasks";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks = MyMockTasks;
  currentTask: Task;

  handelerSelectTask (task: Task): void {
    this.currentTask = task;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
