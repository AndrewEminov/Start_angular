import { Injectable } from '@angular/core';
import { Task } from '../../interfaces/task'
import {MyMockTasks} from "../../mocks/mock-tasks";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  getHeroes(): Observable<Task[]> {
    return of(MyMockTasks);
  }

  constructor() { }
}
