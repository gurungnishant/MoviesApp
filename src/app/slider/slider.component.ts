import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/movies/movie';
import { trigger, transition, animate, style, state } from '@angular/animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class SliderComponent implements OnInit {
  @Input() filteredMovies: Movie[] = [];
  current = 0;
  constructor() { }

  ngOnInit(): void {

  this.sliderTimer() ;

  }

nextBannerMovie(){
  
  this.current = ++this.current % this.filteredMovies.length;
}

prevBannerMovie(){
if(this.current < 1){

  this.current = this.filteredMovies.length-1;

} else

  this.current = this.current - 1;

}


  sliderTimer() {
    setInterval(() => {
      this.current = ++this.current % this.filteredMovies.length;
    }, 5000);
  }

}
