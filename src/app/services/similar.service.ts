import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimilarService {

  constructor( private http: HttpClient) { }

  URL_API_SIMILAR : string = ""

  API_KEY = '791c6dbbcbd8c0fdef30d7a5857e1135'

  getSimilars(id : number){


    this.URL_API_SIMILAR = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${this.API_KEY}&language=en-US&page=1`
    return this.http.get( this.URL_API_SIMILAR)

  }
}
