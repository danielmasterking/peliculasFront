import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies() {
    let url:string = `${environment.ApiUrl}/movies`
    return this.http.get(url);
  }

  getPopular() {
    let url:string = `${environment.ApiUrl}/popular`
    return this.http.get(url);
  }

  getMostRated() {
    let url:string = `${environment.ApiUrl}/top_rated`
    return this.http.get(url);
  }

  getDetail(id:number) {
    let url:string = `${environment.ApiUrl}/detail/${id}`
    return this.http.get(url);
  }
}
