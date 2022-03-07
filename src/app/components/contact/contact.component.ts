import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  movies: Movie[] = [];
  movie = new Movie()
  respuesta: any;
  constructor(private movieService:MoviesService) {
}

  ngOnInit(): void {
    this.createMovie()
  }





  createMovie(){
    this.movieService.postPopular(this.movie).subscribe( (response) => {
      this.respuesta = response
    })
  }

}
