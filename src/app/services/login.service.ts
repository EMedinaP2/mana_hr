import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  private users: Users[] = [
    {
      user: 'admin',
      password: 'password',
    },
    {
      user: 'user',
      password: 'password',
    },
    {
      user: 'asugich@ASG.com',
      password: 'password',
    },
  ];

  getUsers() {
    return this.users;
  }
}

export interface Users {
  user: string;
  password: string;
}
