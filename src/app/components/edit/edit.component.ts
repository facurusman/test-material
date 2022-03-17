import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  original_title: string = '';
  overview: string = '';
  popularity: number = 0;
  realese_date: string = '';
  id: number = 0;

  constructor(private readonly moviesService : MoviesService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.moviesService.getDetail(this.route.snapshot.params['id']).subscribe( (response: any) => {
      console.log(response)
      this.original_title = response[0].original_title
      //otrod
     })
  }

  onEdit(){
    const movie = new Movie({
      original_title: this.original_title,
      overview: this.overview,
      popularity: this.popularity,
      realese_date: this.realese_date,
    });
    this.moviesService.editar(movie, this.id ).subscribe((response) => {
      //location.reload()
      //console.log(response)
    });
  }

}
