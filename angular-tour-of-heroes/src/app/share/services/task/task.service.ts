import { Injectable } from '@angular/core';
import { Task } from '../../interfaces/task'
import {MyMockTasks} from "../../mocks/mock-tasks";
import { Observable, of } from 'rxjs';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

    constructor(private messageService: MessageService) { }

    getTasks(): Observable<Task[]> {
        this.messageService.message = 'Success';
        return of(MyMockTasks);
    }


    getTask(id: number): Observable<Task> {
        this.messageService.add(`fetched task id=${id}`);
        return of(MyMockTasks.find(task => task.id === id));
    }
}
