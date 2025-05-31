import { Component } from '@angular/core';

interface User {
  id: number;
  username: string;
  email: string;
  createdAt: Date;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: User[] = [
    { id: 1, username: 'john', email: 'john@example.com', createdAt: new Date('2024-01-01') },
    { id: 2, username: 'jane', email: 'jane@example.com', createdAt: new Date('2024-02-15') }
  ];
}
