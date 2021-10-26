import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {MoviesService} from '../../services/movies.service';
@Component({
  selector: 'app-detail-movies',
  templateUrl: './detail-movies.component.html',
  styleUrls: ['./detail-movies.component.scss']
})
export class DetailMoviesComponent implements OnInit {
  movie;
  constructor(
    private rutaActiva: ActivatedRoute,
    private router:Router,
    private moviesService:MoviesService
  ) { }

  ngOnInit(): void {
    this.getDetail()
  }


  getDetail() {
    this.moviesService.getDetail(this.rutaActiva.snapshot.params.id).subscribe((response) => {
      let ArrayMovies = this.transformArray(response)
      this.movie = ArrayMovies;
      console.log(ArrayMovies)
      
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

}
