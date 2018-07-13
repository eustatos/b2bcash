import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDetailRoutingModule } from './movie-detail-routing.module';
import { MovieDetailComponent } from './movie-detail.component';

import { MaterialModule } from '../material';

@NgModule({
  imports: [CommonModule, MovieDetailRoutingModule, MaterialModule],
  declarations: [MovieDetailComponent]
})
export class MovieDetailModule {}
