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
  searchkey: any
  movies: Movie[] = [];
  userLogStatus: any;

  constructor(
    private movieObj: MoviesService,
    private userService: UsersService,
    private router: Router,
    private userLoggedInData: UsersService
  ) {}


  ngOnInit(): void {
    this.userLoggedInData.currentStatus.subscribe(userLogStatus => this.userLogStatus = userLogStatus)
    if (this.userLogStatus) {
        this.movieObj.getAllMovies().subscribe((data) => {
        this.movies = data;
      });
    } else {
      this.router.navigate(['/login']);
    }
  }

  searchThis(arg:any){
     this.searchkey = arg
     console.log(this.searchkey)
  }
}
