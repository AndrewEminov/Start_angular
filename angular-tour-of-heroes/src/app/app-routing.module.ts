import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TasksComponent} from "./components/tasks/tasks.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {TaskDetailsComponent} from "./components/task-details/task-details.component";


const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'tasks', component: TasksComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: TaskDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
