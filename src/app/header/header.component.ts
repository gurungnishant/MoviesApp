import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() searchcriteria = new EventEmitter<String>();

  userId: any;
  userLogStatus: any;
  searchword: any
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

  searchThis(){
    this.searchcriteria.emit(this.searchword)
  }
}
