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
  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.params.id;
  }

  logOutUser() {
    this.userService.logoutUser();
    this.router.navigate(['/login']);
  }
}
