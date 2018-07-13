import {
  Component,
  OnInit,
  ViewChild,
  Input,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  EventEmitter,
  Output
} from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { Movie } from '../../models';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.css']
})
export class MovieTableComponent implements OnInit, OnDestroy, OnChanges {
  @Input() movieList$: Observable<Movie[]>;
  @Output() removedMovie: EventEmitter<Movie>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<Movie>;

  ngUnsubscribe$: Subject<null>;

  displayedColumns = ['Title', 'Year', 'action'];

  constructor(private router: Router) {
    this.ngUnsubscribe$ = new Subject<null>();
    this.removedMovie = new EventEmitter<Movie>();
  }

  ngOnChanges(changes: SimpleChanges) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.movieList$.subscribe(data => {
      this.dataSource.data = data;
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

  removeMovie(movie: Movie): void {
    this.removedMovie.emit(movie);
  }

  gotoDetail(movie: Movie): void {
    this.router.navigate(['/movie-detail/' + movie.imdbID]);
  }
}
