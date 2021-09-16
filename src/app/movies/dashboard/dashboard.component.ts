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

  constructor(
    private movieObj: MoviesService,
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.userService.getLoggedInStatus()) {
      this.movieObj.getAllMovies().subscribe((data) => {
        this.movies = data;
      });
    } else {
      this.router.navigate(['/login']);
    }
  }
}
