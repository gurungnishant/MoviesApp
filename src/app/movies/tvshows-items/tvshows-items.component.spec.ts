import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowsItemsComponent } from './tvshows-items.component';

describe('TvshowsItemsComponent', () => {
  let component: TvshowsItemsComponent;
  let fixture: ComponentFixture<TvshowsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvshowsItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
