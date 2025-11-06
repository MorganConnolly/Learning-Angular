import { Component, Input, Output, EventEmitter } from '@angular/core';
import { user } from '../app.component';
import { AppCard } from '../app-card/app-card';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
  imports: [AppCard],
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