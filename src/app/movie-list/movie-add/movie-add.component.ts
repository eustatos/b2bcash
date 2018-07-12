import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl
} from '@angular/forms';
import { Observable } from 'rxjs';
import {
  switchMap,
  distinctUntilChanged,
  debounceTime,
  filter
} from 'rxjs/operators';

import { Movie, ErrorResponse } from '../../models';

import { MovieService } from '../../services';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {
  minQuery = 4;
  addMovieForm: FormGroup;
  @Output() addMovie: EventEmitter<Movie>;
  movieList$: Observable<Movie[] | ErrorResponse>;

  constructor(private fb: FormBuilder, private movieService: MovieService) {}

  ngOnInit() {
    this.addMovieForm = this.fb.group({
      movie: ['', [Validators.required, this.selectMovieValidator()]]
    });
    const searchMovie = (val: string) => {
      return this.movieService.getList(val);
    };
    this.movieList$ = this.addMovieForm.get('movie').valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter(val => val.length > this.minQuery),
      switchMap(searchMovie)
    );
  }

  displayFn(movie?: Movie) {
    console.log(movie);
    return movie ? movie.Title : '';
  }

  selectMovieValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      const forbidden = typeof control.value.Title === 'undefined';
      return forbidden ? { nonSelectMovie: { value: control.value } } : null;
    };
  }
}
