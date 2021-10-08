import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MoviesService } from '../../services/movies.service';
import { HeadtvmovieService } from 'src/app/services/headtvmovie.service';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss'],
  providers:[MoviesService,HeadtvmovieService]
})
export class TrailerComponent implements OnInit {

  movieObj?:Movie
  local_movies : any
  local_rank : any
  video_val : any
  tvOrMovie : any

  constructor(public bsModalRef: BsModalRef,private moviesService: MoviesService, private tvormovieService: HeadtvmovieService) { }

  ngOnInit(): void {
  }

}
