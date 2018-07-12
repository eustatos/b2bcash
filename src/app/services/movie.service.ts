import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Movie, ErrorResponse, SuccessResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url: 'http://www.omdbapi.com/';
  token: '75c2a861';

  constructor(private _http: HttpClient) {}

  getList(query: string): Observable<Movie[] | ErrorResponse> {
    const feed$ = new Subject<Movie[] | ErrorResponse>();
    this._http
      .post<SuccessResponse>(this.url, {
        s: query,
        apikey: this.token
      })
      .subscribe(
        movies => {
          feed$.next(movies.Search);
        },
        error => {
          feed$.next(error.Error);
        }
      );
    return feed$;
  }
}
