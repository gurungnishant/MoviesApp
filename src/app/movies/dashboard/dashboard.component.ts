import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { HeadtvmovieService } from 'src/app/services/headtvmovie.service';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../movie';
import { tv } from '../tv';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  movies: Movie[] = [];
  tvshows : tv[] = [];
  userLogStatus: any;
  tvOrMovie: any;
  isTv : boolean = false;
  isMovie: boolean = true;
//tvormovieselected is a string that determines which movie or tv items to show
  constructor(
    private movieObj: MoviesService,
    private tvObj: MoviesService,
    private userService: UsersService,
    private router: Router,
    private userLoggedInData: UsersService,
    private tvormovieselected : HeadtvmovieService
  ) {}


  ngOnInit(): void {
    this.userLoggedInData.currentStatus.subscribe(userLogStatus => this.userLogStatus = userLogStatus)
    this.tvormovieselected.currentStatus.subscribe(tvOrMovie => this.tvOrMovie = tvOrMovie)

    console.log("dashboard says: "+this.tvOrMovie);
    
   // console.log();
    if (this.userLogStatus) {
        this.movieObj.getAllMovies().subscribe((data) => {
        this.movies = data;
     
      });

      this.tvObj.getAllTvShows().subscribe((data) => {
        this.tvshows = data;
      });

    } else {
      this.router.navigate(['/login']);
    }

    if(this.tvOrMovie == "TV"){
      this.isTv = true;
      this.isMovie = false;
      console.log("dashboard now says: "+this.tvOrMovie);
    }
    else if (this.tvOrMovie == "MOVIE") {
      this.isTv = false;
      this.isMovie = true;
      console.log("dashboard now says: "+this.tvOrMovie);
    }



  }
}
