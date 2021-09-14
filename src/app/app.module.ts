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

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './users/profile/profile.component';
import { TabsModule } from 'ngx-bootstrap/tabs';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
