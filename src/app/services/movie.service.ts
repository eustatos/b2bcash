import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Movie } from '../models';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = 'https://www.omdbapi.com/';
  token = '75c2a861';

  constructor(private _http: HttpClient) {}

  getList(query: string): Observable<Movie[]> {
    const feed$ = new Subject<Movie[]>();
    this._http
      .get(
        this.url +
          '?' +
          qs.stringify({
            s: query,
            apikey: this.token
          })
      )
      .subscribe((response: any) => {
        if (typeof response.Search !== 'undefined') {
          feed$.next(response.Search);
        }
      });
    return feed$;
  }

  getMovie(id: string): Observable<Movie> {
    return this._http.get<Movie>(
      this.url +
        '?' +
        qs.stringify({
          i: id,
          apiKey: this.token
        })
    );
  }
}
