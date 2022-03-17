import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  original_title: string = '';
  overview: string = '';
  popularity: number = 0;
  realese_date: string = '';

  respuesta!: Movie;
  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
  }

  onSend() {
    const movie = new Movie({
      original_title: this.original_title,
      overview: this.overview,
      popularity: this.popularity,
      realese_date: this.realese_date,
    });
    this.movieService.postPopular(movie).subscribe((response) => {
      location.reload()
      console.log(response)
    });
  }
}
