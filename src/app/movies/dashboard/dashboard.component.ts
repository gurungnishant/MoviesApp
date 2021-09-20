import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  movies: Movie[] = [];
  userLogStatus: any;
  currentUserFavs: any[] = [];
  constructor(
    private movieObj: MoviesService,
    private userService: UsersService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.userService.currentStatus.subscribe(userLogStatus => this.userLogStatus = userLogStatus)
    this.currentUserFavs = this.userService.currentUser['favorites'] || [];
    if (this.userLogStatus) {
      this.movieObj.getAllMovies().subscribe((data) => {
        this.movies = data;
      });
    } else {
      this.router.navigate(['/login']);
    }
  }


  addToFavs(movieId: string) {
    if (this.currentUserFavs.length > 0) {
      if (this.currentUserFavs.indexOf(movieId) < 0) {
        this.currentUserFavs.push(movieId)
      }
      else {
        const index = this.currentUserFavs.indexOf(movieId);
        this.currentUserFavs.splice(index, 1);
      }
    } else {
      this.currentUserFavs.push(movieId);
    }
    console.log(this.currentUserFavs);
    this.userService.addToFavs(this.currentUserFavs).subscribe(data => {
      console.log(data);
    });
  }
}
