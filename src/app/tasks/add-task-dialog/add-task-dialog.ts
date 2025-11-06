import { Component, Input, Output, EventEmitter } from '@angular/core';
import { user } from '../../app.component';

@Component({
  selector: 'app-add-task-dialog',
  imports: [],
  templateUrl: './add-task-dialog.html',
  styleUrl: './add-task-dialog.css',
})

export class AddTaskDialog {
  @Input({required: true}) user!: user;
  @Output() close = new EventEmitter<void>();

  closeDialog() {
    this.close.emit();
  }
}
