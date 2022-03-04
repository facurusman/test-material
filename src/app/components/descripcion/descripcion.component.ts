import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from 'src/app/services/details.service';
import { ReviewsService } from 'src/app/services/reviews.service';
import { SimilarService } from 'src/app/services/similar.service';
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

  constructor(private route:ActivatedRoute,private reviewsServicio : ReviewsService, private detailServicio: DetailsService, private similarServicio : SimilarService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.encontrarPelicula()
    this.mostrarReview()
    this.mostrarSimilars()
  }




  encontrarPelicula(){
    this.detailServicio.getDetail(this.id).subscribe( (response) => {

      this.detail = response
    })
  }

  mostrarReview(){
    this.reviewsServicio.getReviews(this.id).subscribe( (response) => {
      this.reviewFiltrada = response
     })
  }

  mostrarSimilars(){
    this.similarServicio.getSimilars(this.id).subscribe( (response) => {

      this.similars = response
     })
  }

}
