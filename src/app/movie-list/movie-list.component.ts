import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services';
import { Movie } from '../models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieList$: Observable<Movie[]>;
  constructor(private clientService: ClientService) {
    this.movieList$ = this.clientService.getList();
  }

  ngOnInit() {}

  addMovie(event: Movie) {
    this.clientService.addMovie(event);
  }

  removeMovie(movie: Movie) {
    this.clientService.removeMovie(movie);
  }
}
