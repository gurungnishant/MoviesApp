import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  @Output() goToHomeEmitter = new EventEmitter<boolean>();
  userId: string = '';
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userId = this.userService.currentUser.id;
  }

  goToHome() {
    this.goToHomeEmitter.emit(false);
  }
}
