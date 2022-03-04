import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.scss']
})
export class DescripcionComponent implements OnInit {
  id: any;
  detail:any
  reviewFiltrada : any;
  similars : any;

  constructor(private route:ActivatedRoute,private movieService: MoviesService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.encontrarPelicula()
    this.mostrarReview()
    this.mostrarSimilars()
  }




  encontrarPelicula(){
    this.movieService.getDetail(this.id).subscribe( (response) => {
      this.detail = response
    })
  }

  mostrarReview(){
    this.movieService.getReviews(this.id).subscribe( (response) => {
      this.reviewFiltrada = response
     })
  }

  mostrarSimilars(){
    this.movieService.getSimilars(this.id).subscribe( (response) => {
      this.similars = response
     })
  }

}
