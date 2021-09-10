import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../movie';


// let moviedata =  {
//   "id": "tt0111161",
//   "rank": "1",
//   "title": "The Shawshank Redemption",
//   "fullTitle": "The Shawshank Redemption (1994)",
//   "year": "1994",
//   "image": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
//   "crew": "Frank Darabont (dir.), Tim Robbins, Morgan Freeman",
//   "imDbRating": "9.2",
//   "imDbRatingCount": "2457121"
// }


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  movies : Movie[] = [];


  constructor( private movieObj : MoviesService) {   }

  ngOnInit(): void {
    this.movies = this.movieObj.getAllMovies();
   // this.movies[0].id;
  }




}
