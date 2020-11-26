import { Injectable } from '@angular/core';
import { Task } from '../../interfaces/task'
import {MyMockTasks} from "../../mocks/mock-tasks";
import { Observable, of } from 'rxjs';
import { MessageService } from '../message/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

    constructor(private http: HttpClient, private messageService: MessageService) { }

    private tasksUrl = 'api/tasks';  // URL to web api

    private log(message: string) {
      this.messageService.add(`TaskService: ${message}`);
    }

    getTasks(): Observable<Task[]> {
        this.messageService.message = 'Success';

        return this.http.get<Task[]>(this.tasksUrl)
    }


    getTask(id: number): Observable<Task> {
        this.messageService.add(`fetched task id=${id}`);
        return of(MyMockTasks.find(task => task.id === id));
    }
}
