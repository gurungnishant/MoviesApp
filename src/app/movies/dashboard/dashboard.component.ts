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

  allMovies: Movie[] = [];
  filteredMovies: Movie[] = [];
  moviesCountOnInitialLoad: number = 12;
  moviesToShow: number = 6;
  tvshows : tv[] = [];
  userLogStatus: any;
  tvOrMovie: any;
  
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
    this.userLoggedInData.currentStatus.subscribe((userLogStatus) => (this.userLogStatus = userLogStatus));
    this.tvormovieselected.currentStatus.subscribe(tvOrMovie => this.tvOrMovie = tvOrMovie);
    console.log("dashboard says: "+this.tvOrMovie);
    if (this.userLogStatus) {
      this.movieObj.getAllMovies().subscribe((data) => {
        this.allMovies = data;
        this.setMoviesForPage(0, this.moviesCountOnInitialLoad);
      });

      this.tvObj.getAllTvShows().subscribe((data) => {
        this.tvshows = data;
      });

    } else {
      this.router.navigate(['/login']);
    }
  }

  setMoviesForPage(startIndex: number, count: number) {
    let endIndex = startIndex + count;
    endIndex =
      endIndex >= this.allMovies.length ? this.allMovies.length - 1 : endIndex;
    const moviesToShow = this.allMovies.slice(startIndex, endIndex);
    this.filteredMovies = [...this.filteredMovies, ...moviesToShow];
    console.log(this.filteredMovies);
  }

  showMoreMovies() {
    const startIndex = this.filteredMovies.length;
    this.setMoviesForPage(startIndex, this.moviesToShow);
  }
}