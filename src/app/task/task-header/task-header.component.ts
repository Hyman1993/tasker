import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {

  @Input() header = '';

  @Output() newTask = new EventEmitter<void>();

  @Output() moveAll = new EventEmitter<void>();

  @Output() delList = new EventEmitter<void>();

  @Output() onEditList = new EventEmitter<void>();

  onNewTaskClick() {
     this.newTask.emit();
  }

  constructor() { }

  ngOnInit() {

  }

  onMoveAllClick() {
    this.moveAll.emit();
  }

  onDelListClick() {
   this.delList.emit();
  }

  onEditListClick() {
   this.onEditList.emit();
  }
}
