import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './movies/dashboard/dashboard.component';
import { MovieItemsComponent } from './movies/movie-items/movie-items.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './movies/details/details.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginComponent } from './movies/login/login.component';
import { UsersService } from './services/users.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './users/profile/profile.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HttpClientModule } from '@angular/common/http';
import { TrailerComponent } from './movies/trailer/trailer.component';
import { SafePipe } from 'src/safe.pipe';
import { TvshowsItemsComponent } from './movies/tvshows-items/tvshows-items.component';
import { LoaderComponent } from './utils/loader/loader.component';
import { NotFoundComponent } from './utils/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MovieItemsComponent,
    DetailsComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    TrailerComponent,
    SafePipe,
    TvshowsItemsComponent,
    LoaderComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
