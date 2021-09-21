import { Component, Input, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DetailsComponent } from '../details/details.component';
import { Movie } from '../movie';

@Component({
  selector: 'app-tvshows-items',
  templateUrl: './tvshows-items.component.html',
  styleUrls: ['./tvshows-items.component.scss']
})
export class TvshowsItemsComponent implements OnInit {

  @Input() movie: Movie = {};
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  openModalWithComponent(id: any) {
    const initialState = {
      movieObj: this.movie,
    };
    this.bsModalRef = this.modalService.show(DetailsComponent, {
      initialState,
      class: 'gray modal-lg modal-dialog-centered',
    });
  }

}
