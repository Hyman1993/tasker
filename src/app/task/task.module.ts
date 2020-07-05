import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { TaskListComponent } from './task-list/task-list.component';
import {TaskRoutingModule} from './task-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedModule,
  ],
  declarations: [
    TaskHomeComponent,
    TaskItemComponent,
    TaskHeaderComponent,
    TaskListComponent,
  ]
})
export class TaskModule { }
