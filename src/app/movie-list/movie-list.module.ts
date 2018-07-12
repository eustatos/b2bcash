import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListRoutingModule } from './movie-list-routing.module';
import { MovieListComponent } from './movie-list.component';

@NgModule({
  imports: [
    CommonModule,
    MovieListRoutingModule
  ],
  declarations: [MovieListComponent]
})
export class MovieListModule { }
