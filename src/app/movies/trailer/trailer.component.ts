import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss'],
  providers:[MoviesService]
})
export class TrailerComponent implements OnInit {

  movieObj?:Movie
  local_movies : any
  local_rank : any
  video_val : any

  constructor(public bsModalRef: BsModalRef,private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.local_rank = this.movieObj?.rank
    if(this.local_rank  <= 100){
      this.local_rank = this.local_rank - 1
    }else{
      this.local_rank = this.local_rank
    }
    this.moviesService.getAllMovies().subscribe((data) => {
      this.local_movies = data;
    this.video_val = this.local_movies[this.local_rank].trailerLink
    })
  }

}
