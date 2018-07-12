import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../../models';

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.css']
})
export class MovieDescriptionComponent implements OnInit {
  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
  }

  getImage() {
    return this.movie.Poster.replace('_SX300', '_SX100');
  }

}
