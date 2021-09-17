import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './../movies/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:3000/movies');
  }
}
