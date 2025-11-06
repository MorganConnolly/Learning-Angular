import { Component, Input, Output, EventEmitter } from '@angular/core';
import { user } from '../../app.component';
import { FormsModule } from '@angular/forms';
import { newTaskData } from '.././task/task';

@Component({
  selector: 'app-add-task-dialog',
  imports: [FormsModule],
  templateUrl: './add-task-dialog.html',
  styleUrl: './add-task-dialog.css',
})

export class AddTaskDialog {
  @Input({required: true}) user!: user;
  @Output() close = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<newTaskData>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  closeDialog() {
    this.close.emit();
  }

  onSubmit() {
    this.addTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDueDate
    });
    this.close.emit();
  }
}
