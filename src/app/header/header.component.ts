import { UsersService } from 'src/app/services/users.service';
import { HeadtvmovieService } from 'src/app/services/headtvmovie.service';
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
  tvOrMovie: any;
  

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private router: Router,
    private userLoggedInData: UsersService,
    private tvormovieselected : HeadtvmovieService
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.params.id;
    this.userLoggedInData.currentStatus.subscribe(userLogStatus => this.userLogStatus = userLogStatus)
    this.tvormovieselected.currentStatus.subscribe(tvOrMovie => this.tvOrMovie = tvOrMovie)

  }

  changeToMovie(){
    this.tvormovieselected.changeTvOrMovie("MOVIE");
    console.log("you pressed change to MOVIE")
  }

  changeToTv(){
    this.tvormovieselected.changeTvOrMovie("TV");
    console.log("you pressed change to TV")
  }


  
  logOutUser() {
    //this.userService.logoutUser();
    this.userLoggedInData.changeMessage(false);
    

    
    this.router.navigate(['/login']);
  }
}
