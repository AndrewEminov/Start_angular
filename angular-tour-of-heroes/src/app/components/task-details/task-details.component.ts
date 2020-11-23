import { Component, OnInit, Input } from '@angular/core';
import {Task} from "../../share/interfaces/task";

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  @Input() task: Task;

  constructor() { }

  ngOnInit(): void {
  }

}
