import { Component, OnInit } from '@angular/core';
import {Task} from "../../share/interfaces/task";
import {TaskService} from "../../share/services/task/task.service"
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  currentTask: Task;

  constructor(private taskService: TaskService) {}

  handelerSelectTask (task: Task): void {
    this.currentTask = task;
  }

  getHeroes(): void {
    this.taskService.getHeroes().subscribe(tasks => this.tasks = tasks);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
