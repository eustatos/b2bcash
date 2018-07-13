import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  feed$: Subject<Movie[]>;

  constructor() {
    this.feed$ = new Subject<Movie[]>();
  }

  getList() {
    setTimeout(() => {
      if (localStorage.getItem('b2bcash') !== null) {
        this.feed$.next(JSON.parse(localStorage.getItem('b2bcash')));
      }
    }, 1);
    return this.feed$;
  }

  addMovie(movie: Movie) {
    let movieList = [];
    if (localStorage.getItem('b2bcash') !== null) {
      movieList = JSON.parse(localStorage.getItem('b2bcash'));
    }
    movieList.push(movie);
    this.feed$.next(movieList);
    localStorage.setItem('b2bcash', JSON.stringify(movieList));
  }

  removeMovie(movie: Movie): void {
    const movieList = JSON.parse(localStorage.getItem('b2bcash'));
    let counter = 0;
    let searchMovie = true;
    while (counter < movieList.length && searchMovie) {
      if (movieList[counter].imdbID === movie.imdbID) {
        searchMovie = false;
        movieList.splice(counter, 1);
      }
      counter++;
    }
    this.feed$.next(movieList);
    localStorage.setItem('b2bcash', JSON.stringify(movieList));
  }

  getMovie(imdbID: string) {
    const feed$ = new Subject<Movie>();
    const movieList = JSON.parse(localStorage.getItem('b2bcash'));
    let counter = 0;
    let searchMovie = true;
    setTimeout(() => {
      while (counter < movieList.length && searchMovie) {
        if (movieList[counter].imdbID === imdbID) {
          searchMovie = false;
          feed$.next(movieList[counter]);
        }
        counter++;
      }
    }, 1);
    return feed$;
  }
}
