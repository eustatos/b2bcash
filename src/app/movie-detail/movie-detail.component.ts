import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ClientService } from '../services';
import { Movie } from '../models';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie$: Observable<Movie>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService
  ) {}

  ngOnInit() {
    const getMovie = (params: ParamMap) => {
      return this.clientService.getMovie(params.get('id'));
    };
    this.movie$ = this.route.paramMap.pipe(switchMap(getMovie));
  }

  gotoMovieList() {
    this.router.navigate([ '/movie-list' ]);
  }
}
