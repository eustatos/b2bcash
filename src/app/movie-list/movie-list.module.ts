import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MovieListRoutingModule } from './movie-list-routing.module';
import { MovieListComponent } from './movie-list.component';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { MovieTableComponent } from './movie-table/movie-table.component';
import { MaterialModule } from '../material';

@NgModule({
  imports: [
    CommonModule,
    MovieListRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [MovieListComponent, MovieAddComponent, MovieTableComponent]
})
export class MovieListModule {}
