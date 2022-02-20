import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewsService } from 'src/app/services/reviews.service';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.scss']
})
export class DescripcionComponent implements OnInit {
  id: any;
  pelisPopulares: any;
  pelicula:any


  reviewFiltrada : any

  constructor(private route:ActivatedRoute, private peliculasServicio : MoviesService, private reviewsServicio : ReviewsService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.encontrarPelicula(this.id)
    this.mostrarReview()
  }




  encontrarPelicula(id:number){
    this.peliculasServicio.getPopulars().subscribe( (response) => {

      this.pelisPopulares = response
      let peliculas = this.pelisPopulares.results
      this.pelicula = peliculas.filter(id)
     })

  }

  mostrarReview(){
    this.reviewsServicio.getReviews(this.id).subscribe( (response) => {

      this.reviewFiltrada = response
     })
  }



}
