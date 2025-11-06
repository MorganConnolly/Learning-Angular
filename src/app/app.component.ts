import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';
import { DUMMY_USERS } from './dummy-users';

export type user = {
  id: string;
  name: string;
  avatar: string;
};

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User, Tasks],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  users = DUMMY_USERS;
  selectedUser?: user;

  onSelectUser(id: string) {
    this.selectedUser = DUMMY_USERS.find((user) => user.id === id);
    console.log('Selected User Name:', this.selectedUser?.name);
  }
}
