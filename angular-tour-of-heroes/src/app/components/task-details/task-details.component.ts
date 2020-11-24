import { Component, OnInit, Input } from '@angular/core';
import {Task} from "../../share/interfaces/task";
import {TaskService} from "../../share/services/task/task.service";

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  task: Task;

  constructor(
      private route: ActivatedRoute,
      private heroService: TaskService,
      private location: Location
  ) { }

  ngOnInit(): void {
    this.getTask();

  }

  getTask(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getTask(id)
        .subscribe(task => this.task = task);
  }

  goBack(): void {
    this.location.back();
  }

}
