import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DetailsComponent } from '../details/details.component';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-items',
  templateUrl: './movie-items.component.html',
  styleUrls: ['./movie-items.component.scss'],
})
export class MovieItemsComponent implements OnInit {
  @Input() movie: Movie = {};
  @Input() isFav: boolean = false;
  @Output() addOrRemoveFavorites = new EventEmitter();
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void { }

  openModalWithComponent(id: any) {
    const initialState = {
      movieObj: this.movie,
    };
    this.bsModalRef = this.modalService.show(DetailsComponent, {
      initialState,
      class: 'gray modal-lg modal-dialog-centered',
    });
  }

  addToFavs() {
    this.addOrRemoveFavorites.emit(this.movie.id);
  }

  removeFromFavs() {
    this.addOrRemoveFavorites.emit(this.movie.id);
  }
}
