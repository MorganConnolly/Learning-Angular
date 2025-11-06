import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppCard } from '../../app-card/app-card';
import { DatePipe } from '@angular/common';

export type task = {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
};

export type newTaskData = {
  title: string;
  summary: string;
  date: string;
}

@Component({
  selector: 'app-task',
  imports: [AppCard, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})

export class Task {
  @Input({required: true}) task!: task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
