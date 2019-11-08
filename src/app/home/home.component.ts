import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import {Router} from '@angular/router';
import {HomeService} from '../_services/home.service';


@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
  currentUser: any;
  findMovie: any;
  text: string;
  favoriteMovie:any ;


    constructor(private router: Router , private  serrviceHome: HomeService) { }

    ngOnInit() {
      this.currentUser = localStorage.getItem('currentUser');

      this.serrviceHome.getFavoriteMovies().subscribe(
        mv => { this.favoriteMovie = mv; console.log(mv); },
        err1 => console.log(err1)
      );
    }

  logout(){
      this.currentUser = null;
      localStorage.setItem('currentUser', null);
      this.router.navigate(['/login']);

  }

  find() {
    console.log(this.text);

    this.serrviceHome.findMovie(this.text).subscribe(
      res => { this.findMovie = res ; console.log(res); },
      err => console.log(err)

    );
  }

  addMovie() {
    this.findMovie.fav = true;
    this.serrviceHome.addFavoriteMovie(this.findMovie).subscribe(
      res => {
        this.serrviceHome.getFavoriteMovies().subscribe(
          mv => { this.favoriteMovie = mv; console.log(mv); },
          err1 => console.log(err1)
        );
      },
      err => console.log(err)

    );
  }
}
