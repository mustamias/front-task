import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private  apiHost = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  findMovie(movieTitle) {
    return this.http.get(this.apiHost + 'find/'+movieTitle);
  }

  getFavoriteMovies(){
    return this.http.get(this.apiHost + 'movie');
  }

  addFavoriteMovie(movie: any){
    return this.http.post(this.apiHost + 'movie/add', movie);
  }

}
