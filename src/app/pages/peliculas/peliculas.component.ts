import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {
  movies;
  title:string ='Latest Movies'
  search:string;
  constructor( 
    private router:Router,
    private moviesService:MoviesService
    ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.moviesService.getMovies().subscribe((response) => {
      let ArrayMovies = this.transformArray(response)
      this.movies = ArrayMovies[2];
      console.log(this.movies)
      this.title ='Latest Movies'
      /*this.movies.forEach(function(element) {
        console.log(element.poster_path);
      });*/
    }, e => {
        
      console.log(`The error: `, e);
      
    });
  }


  transformArray(objects : any = []) {
    return Object.values(objects);
  }

  getPopular(){
    this.moviesService.getPopular().subscribe((response) => {
      let ArrayMovies = this.transformArray(response)
      this.movies = ArrayMovies[1];
      console.log(ArrayMovies)
      this.title ='Popular Movies'
      /*this.movies.forEach(function(element) {
        console.log(element.poster_path);
      });*/
    }, e => {
        
      console.log(`The error: `, e);
      
    });
  }

  getMostRated(){
    this.moviesService.getMostRated().subscribe((response) => {
      let ArrayMovies = this.transformArray(response)
      this.movies = ArrayMovies[1];
      console.log(ArrayMovies)
      this.title ='More Rated Movies'
      /*this.movies.forEach(function(element) {
        console.log(element.poster_path);
      });*/
    }, e => {
        
      console.log(`The error: `, e);
      
    });
  }

  getSearch(){
    console.log(this.search)
    this.moviesService.getSearch(this.search).subscribe((response) => {
      let ArrayMovies = this.transformArray(response)
      this.movies = ArrayMovies[1];
      console.log(ArrayMovies)
      this.title ='Search Movies :' + this.search;
      /*this.movies.forEach(function(element) {
        console.log(element.poster_path);
      });*/
    }, e => {
        
      console.log(`The error: `, e);
      
    });
  }
}
