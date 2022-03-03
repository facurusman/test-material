import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  API_KEY = '791c6dbbcbd8c0fdef30d7a5857e1135'

  URL_API = `https://api.themoviedb.org/3/movie/popular?api_key=${this.API_KEY}&language=en-US`
  URL_API_MI_BK = 'http://localhost:3000';

  getPopulars(){

    return this.http.get(this.URL_API_MI_BK)

  }

}
