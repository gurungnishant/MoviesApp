import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

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
  //isLoggedin: boolean = false;
  currentUser: any = null;
  private isLoggedin: BehaviorSubject<any> = new BehaviorSubject(false);
  currentStatus = this.isLoggedin.asObservable();

  constructor(private http: HttpClient) {}

  changeMessage(message: boolean) {
    this.isLoggedin.next(message);
    console.log(this.isLoggedin);
    if (!message) {
      this.currentUser = null;
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('currentUser');
      localStorage.removeItem('currentUserId');
    }
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/users');
  }

  // getUsers(input_username: string, input_pwd: string) {
  //   checkstatus[0] = false;
  //   if (input_username != '' && input_pwd != '') {
  //     for (let i = 0; i < userdata.length; i++) {
  //       if (
  //         userdata[i].username == input_username &&
  //         userdata[i].password == input_pwd
  //       ) {
  //         checkstatus[0] = true;
  //         checkstatus[1] = userdata[i].id;
  //         //   this.isLoggedin = true;
  //         this.changeMessage(true);
  //         this.currentUser = userdata[i];
  //       }
  //     }
  //     if (checkstatus[0] == false) {
  //       checkstatus[0] = false;
  //       checkstatus[1] = 404;
  //       // this.isLoggedin = false;
  //       this.changeMessage(false);
  //     }
  //   }
  //   return checkstatus;
  // }

  setCurrentUser(user: any) {
    this.currentUser = user;
    localStorage.setItem('isLoggedIn', JSON.stringify(true));
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('currentUserId', JSON.stringify(user.id));
  }

  getUser(id: number) {
    const userIndex = userdata.findIndex((user) => user.id === +id);
    let user = null;
    if (userIndex >= 0) {
      user = userdata[userIndex];
    }
    return user;
  }

  // getLoggedInStatus() {
  //   return this.isLoggedin;
  // }

  // logoutUser() {
  //   this.isLoggedin = false;
  // }

  addToFavs(favoritesData: any) {
    const userId = this.currentUser.id;
    this.setCurrentUser({ ...this.currentUser, favorites: [...favoritesData] });
    return this.http.patch(
      `http://localhost:3000/users/${userId}`,
      { favorites: [...favoritesData] },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
