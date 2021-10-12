import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  input_username: string;
  input_pwd: string;
  user_id: any;
  error_cond: boolean = false;
  status: boolean = false;

  constructor(private usersService: UsersService, private router: Router) {
    this.input_username = '';
    this.input_pwd = '';
  }

  ngOnInit(): void {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const currentUserId = localStorage.getItem('currentUserId');
    const currentUser = localStorage.getItem('currentUser');
    if (isLoggedIn && currentUser) {
      this.usersService.changeMessage(true);
      this.usersService.setCurrentUser(JSON.parse(currentUser));
      this.router.navigate(['/home', currentUserId]);
    }
  }

  loginUser(formobj: any) {
    this.usersService.getUsers().subscribe((users: any) => {
      const currentUser = users.find(
        (user: { username: any; password: any }) =>
          user.username === formobj.user_name &&
          user.password === formobj.user_pwd
      );
      if (currentUser) {
        this.usersService.changeMessage(true);
        this.usersService.setCurrentUser(currentUser);
        this.error_cond = false;
        this.router.navigate(['/home', currentUser.id]);
      } else {
        this.error_cond = true;
      }
    });
  }

  // onClickSubmit(formobj : any){
  //   //get form details into local variables (user entered variables)
  //   this.input_username = formobj.user_name
  //   this.input_pwd = formobj.user_pwd
  //   //pass user entered information to service to validate
  //   let serviceobj = this.usersService.getUsers(this.input_username,this.input_pwd)
  //   //unpack the response into local variables
  //   this.user_id = serviceobj[1]
  //   this.status = serviceobj[0]
  //   //set the response user id information and status of rendering
  //   if (this.status) {
  //     this.user_id = serviceobj[1]
  //     this.error_cond = false
  //     this.router.navigate(['/home',this.user_id])//pass the user id to the next component (that is home component)
  //   }else{
  //     this.error_cond = true
  //   }
  // }
  registerUsers(formobj: any) {
    console.log('The registered username is ' + formobj.user_name);
    window.location.reload();
  }
}
