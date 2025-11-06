import { Component, Input } from '@angular/core';
import { user } from '../app.component';
import { Task } from "./task/task";
import { AddTaskDialog } from './add-task-dialog/add-task-dialog';

@Component({
  selector: 'app-tasks',
  imports: [Task, AddTaskDialog],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})

export class Tasks {
  @Input({required: true}) user!: user;

  addTaskDialogOpen = false;
  
  dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary: 'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  get selectedUserTasks() {
    return this.dummyTasks.filter(task => task.userId === this.user.id);
  }

  onCompleteTask(taskId: string) {
    this.dummyTasks = this.dummyTasks.filter(task => task.id !== taskId);
  }

  toggleAddTask() {
    this.addTaskDialogOpen = !this.addTaskDialogOpen;
  }
}
