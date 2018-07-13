import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'movie-list', loadChildren: './movie-list/movie-list.module#MovieListModule' },
  { path: 'movie-detail/:id', loadChildren: './movie-detail/movie-detail.module#MovieDetailModule' },
  { path: 'movie-detail', redirectTo: 'movie-list'},
  { path: '', pathMatch: 'full', redirectTo: 'movie-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
