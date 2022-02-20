import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  pelisPopulares : any

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.masPopulares()
  }


  masPopulares() {
   this.moviesService.getPopulars().subscribe( (response) => {

    this.pelisPopulares = response
   })
  }




}
