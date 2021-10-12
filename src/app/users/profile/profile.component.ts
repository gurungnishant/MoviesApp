import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/movies/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: any = null;
  favorites: Movie[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService,
    private movieService: MoviesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      const userId = param['id'];
      this.user = this.userService.currentUser;
      if (!this.user) {
        this.router.navigate(["/login"]);
      }
      if (this.user.favorites) {
        this.getUserFavs();
        this.getUserFavs2();
      }
    });
  }

  getUserFavs() {
    this.movieService.getAllMovies().subscribe(movies => {
      const userFavs = this.user.favorites;
      userFavs.forEach((fav: string) => {
        const movie = movies.find(movie => movie.id === fav);
        if (movie) {
          this.favorites.push(movie)
        }
      })
      console.log(this.favorites);
    })
  }


  getUserFavs2() {
    this.movieService.getAllTvShows().subscribe(movies => {
      const userFavs = this.user.favorites;
      userFavs.forEach((fav: string) => {
        const movie = movies.find(movie => movie.id === fav);
        if (movie) {
          this.favorites.push(movie)
        }
      })
      console.log(this.favorites);
    })
  }



  removeFromFavs(movieId: string) {
    const index = this.favorites.findIndex(movie => movie.id === movieId);
    const newFavs = this.favorites.splice(index, 1);
    this.userService.addToFavs(newFavs).subscribe(data => {
      console.log("Removed from favs");
    })
  }
}
