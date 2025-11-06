import { Component, Input, Output, EventEmitter } from '@angular/core';
import { user } from '../app.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
})

export class User {
  @Input({required: true}) user!: user;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  public onUserClick() {
    this.select.emit(this.user.id);
  }
}