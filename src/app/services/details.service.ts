import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http: HttpClient) { }

  API_KEY = '791c6dbbcbd8c0fdef30d7a5857e1135'

  URL_API_DETAIL : string = ""


  getDetail(id:number){
    this.URL_API_DETAIL = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.API_KEY}&language=en-US`

    return this.http.get( this.URL_API_DETAIL)

  }



}
