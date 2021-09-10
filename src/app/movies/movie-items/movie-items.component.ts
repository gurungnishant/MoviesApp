import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-items',
  templateUrl: './movie-items.component.html',
  styleUrls: ['./movie-items.component.scss']
})
export class MovieItemsComponent implements OnInit {

  constructor(

  ) { }

  ngOnInit(): void {
  }

  @Input() movie : Movie = {};




  

}
