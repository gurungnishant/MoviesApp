import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { HeadtvmovieService } from 'src/app/services/headtvmovie.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../movie';
import { tv } from '../tv';
import { HeaderComponent } from 'src/app/header/header.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  searchkey: any;
  movies: Movie[] = [];
  allMovies: Movie[] = [];
  filteredMovies: Movie[] = [];
  filteredTvShows: tv[] = [];
  showSlider: boolean = true;
  moviesCountOnInitialLoad: number = 12;
  moviesToShow: number = 6;
  tvToShow = 6;
  tvshows: tv[] = [];
  userLogStatus: any;
  currentUserFavs: any[] = [];
  tvOrMovie: any;
  hideShowMore: boolean = false;
  showLoader: boolean = false;
  showNotFound: boolean = false;
  @ViewChild(HeaderComponent, { static: false }) header: HeaderComponent;

  //tvormovieselected is a string that determines which movie or tv items to show
  constructor(
    private movieObj: MoviesService,
    private tvObj: MoviesService,
    private userService: UsersService,
    private router: Router,
    private tvormovieselected: HeadtvmovieService
  ) {}

  ngOnInit(): void {
    this.userService.currentStatus.subscribe((userLogStatus) => {
      this.userLogStatus = userLogStatus;
      if (this.userLogStatus) {
        this.showLoader = true;
        setTimeout(() => {
          this.movieObj.getAllMovies().subscribe((data) => {
            this.allMovies = data;
            this.setMoviesForPage(0, this.moviesCountOnInitialLoad);
            this.showLoader = false;
          });

          this.tvObj.getAllTvShows().subscribe((data) => {
            this.tvshows = data;
            this.setTvForPage(0, this.moviesCountOnInitialLoad);
            this.showLoader = false;
          });
        }, 2000);
      } else {
        this.router.navigate(['/login']);
      }
    });
    this.tvormovieselected.currentStatus.subscribe(
      (tvOrMovie) => (this.tvOrMovie = tvOrMovie)
    );
    this.currentUserFavs = this.userService.currentUser
      ? this.userService.currentUser['favorites']
        ? this.userService.currentUser['favorites']
        : []
      : [];
  }

  searchThis(arg: any) {
    if (arg) {
      arg = arg.toString();
      arg = arg.toLowerCase();
      this.searchkey = arg;
      this.showSlider = false;
      this.hideShowMore = true;
      this.filteredMovies = [...this.allMovies];
      this.filteredTvShows = [...this.tvshows];
    } else {
      this.searchkey = '';
      this.hideShowMore = false;
      this.showSlider = true;
      this.filteredMovies = this.allMovies.slice(0, 12);
      this.filteredTvShows = this.tvshows.slice(0, 12);
    }
  }

  addToFavs(movieId: string) {
    if (this.currentUserFavs.length > 0) {
      if (this.currentUserFavs.indexOf(movieId) < 0) {
        this.currentUserFavs.push(movieId);
      } else {
        const index = this.currentUserFavs.indexOf(movieId);
        this.currentUserFavs.splice(index, 1);
      }
    } else {
      this.currentUserFavs.push(movieId);
    }
    console.log(this.currentUserFavs);
    this.userService.addToFavs(this.currentUserFavs).subscribe((data) => {
      console.log(data);
    });
  }

  //tv shows see more function   begin----
  setTvForPage(startIndex: number, count: number) {
    let endIndex = startIndex + count;
    endIndex =
      endIndex >= this.tvshows.length ? this.tvshows.length - 1 : endIndex;
    const tvToShow = this.tvshows.slice(startIndex, endIndex);
    this.filteredTvShows = [...this.filteredTvShows, ...tvToShow];
    console.log(this.filteredTvShows);
  }

  showMoreTvShows() {
    const startIndex = this.filteredTvShows.length;
    this.setTvForPage(startIndex, this.tvToShow);
  }

  //tv shows see more feature end -----

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

  onGoToHome(event: boolean) {
    if (!event) {
      this.header.searchword = '';
      this.searchThis('');
    }
  }
}
