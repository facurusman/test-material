import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  URL_API_DETAIL: string = '';
  URL_API_SIMILAR: string = '';

  constructor(private http: HttpClient) { }

  API_KEY = '791c6dbbcbd8c0fdef30d7a5857e1135'

  URL_API = `https://api.themoviedb.org/3/movie/popular?api_key=${this.API_KEY}&language=en-US`
  URL_API_MI_BK : string = '';
  URL_API_BK_RW: string = '';
  URL_API_BK_DT: string = '';
  URL_API_BK_SI: string = '';

  getPopulars(){

    this.URL_API_MI_BK = 'http://localhost:3000'

    return this.http.get(this.URL_API_MI_BK)

  }

  getDetail(id:number){

    this.URL_API_BK_DT = `http://localhost:3000/descripcion/${id}`
    this.URL_API_DETAIL = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.API_KEY}&language=en-US`

    return this.http.get( this.URL_API_BK_DT)

  }


  getReviews(id : number){

    this.URL_API_BK_RW = `http://localhost:3000/descripcion/${id}`;

    // this.URL_API_REVIEW =  `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${this.API_KEY}&language=en-US&page=1`
    return this.http.get( this.URL_API_BK_RW)

  }


  getSimilars(id : number){

    this.URL_API_BK_SI = `http://localhost:3000/descripcion/${id}`
    this.URL_API_SIMILAR = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${this.API_KEY}&language=en-US&page=1`
    return this.http.get( this.URL_API_BK_SI)

  }

}
