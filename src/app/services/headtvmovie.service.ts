import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeadtvmovieService {
  constructor() {}
  private tvOrMovie: BehaviorSubject<string> = new BehaviorSubject('MOVIE');
  currentStatus = this.tvOrMovie.asObservable();

  changeTvOrMovie(message: string) {
    this.tvOrMovie.next(message);
    // console.log(this.tvOrMovie);
  }
}
