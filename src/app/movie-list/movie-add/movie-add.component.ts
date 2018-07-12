import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Movie, ErrorResponse } from '../../models';

import { MovieService } from '../../services';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {
  addMovieForm: FormGroup;
  @Output() addMovie: EventEmitter<Movie>;
  movieList$: Observable<Movie[] | ErrorResponse>;

  constructor(private fb: FormBuilder, private movieService: MovieService) {}

  ngOnInit() {
    this.addMovieForm = this.fb.group({
      movie: ['', [Validators.required]]
    });
    // this.movieList$ = this.addMovieForm
    // .get('movie')
    // .valueChanges.pipe(switchMap());
  }
}
