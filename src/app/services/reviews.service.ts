import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  constructor(private route:ActivatedRoute, private http: HttpClient) { }

  URL_API_REVIEW : string = ""

  API_KEY = '791c6dbbcbd8c0fdef30d7a5857e1135'




  getReviews(id : number){


    this.URL_API_REVIEW =  `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${this.API_KEY}&language=en-US&page=1`
    return this.http.get( this.URL_API_REVIEW)

  }
}
