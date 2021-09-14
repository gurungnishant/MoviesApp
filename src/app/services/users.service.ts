import { Injectable } from '@angular/core';

let checkstatus: any[] = [];
let userdata: any[] = [
  {
    id: 1,
    name: 'Leanne Graham',
    password: '1234',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
  {
    id: 2,
    name: 'Micheal Scott',
    password: '1234',
    username: 'Prison Mike',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
];

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  isLoggedin: boolean = false;
  constructor() {}

  getUsers(input_username: string, input_pwd: string) {
    checkstatus[0] = false;
    if (input_username != '' && input_pwd != '') {
      for (let i = 0; i < userdata.length; i++) {
        if (
          userdata[i].username == input_username &&
          userdata[i].password == input_pwd
        ) {
          checkstatus[0] = true;
          checkstatus[1] = userdata[i].id;
          this.isLoggedin = true;
        }
      }
      if (checkstatus[0] == false) {
        checkstatus[0] = false;
        checkstatus[1] = 404;
        this.isLoggedin = false;
      }
    }
    return checkstatus;
  }

  getUser(id: number) {
    const userIndex = userdata.findIndex((user) => user.id === +id);
    let user = null;
    if (userIndex >= 0) {
      user = userdata[userIndex];
    }
    return user;
  }

  getLoggedInStatus() {
    return this.isLoggedin;
  }

  logoutUser() {
    this.isLoggedin = false;
  }
}
