import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie';


@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private readonly http: HttpClient) {}

  getPopulars() {
    return this.http.get(environment.apiUrl);
  }

  getDetail(id: number) {
    const url = `${environment.apiUrl}/details/${id}`;
    return this.http.get(url);
  }

  getReviews(id: number) {
    const url = `${environment.apiUrl}/reviews/${id}`;
    return this.http.get(url);
  }

  getSimilars(id: number) {
    const url = `${environment.apiUrl}/similars/${id}`;
    return this.http.get(url);
  }


  postPopular(movie : Movie): Observable<Movie>{
    const body = JSON.stringify(movie)
    return this.http.post<Movie>(environment.apiUrl, body)
  }
}
