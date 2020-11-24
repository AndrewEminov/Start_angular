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

  constructor(private taskService: TaskService) {}

  getHeroes(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
