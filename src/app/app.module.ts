import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './gif/_share/header/header.component';
import { SearchComponent } from './gif/_share/search/search.component';
import { GifListComponent } from './gif/pages/gif-list/gif-list.component';
import { GifDetailComponent } from './gif/pages/gif-detail/gif-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { NzImageModule } from 'ng-zorro-antd/image';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RatingLevelGComponent } from './gif/pages/gif-detail/_share/rating-level-g/rating-level-g.component';
import { RatingLevelPgComponent } from './gif/pages/gif-detail/_share/rating-level-pg/rating-level-pg.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    GifListComponent,
    GifDetailComponent,
    RatingLevelGComponent,
    RatingLevelPgComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NzImageModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
