import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userId: any;
  userLogStatus: any;
  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private router: Router,
    private userLoggedInData: UsersService
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.params.id;
    this.userLoggedInData.currentStatus.subscribe(userLogStatus => this.userLogStatus = userLogStatus)
  }

  logOutUser() {
    //this.userService.logoutUser();
    this.userLoggedInData.changeMessage(false);
    
    this.router.navigate(['/login']);
  }
}
