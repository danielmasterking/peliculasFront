import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {MoviesService} from '../../services/movies.service';
@Component({
  selector: 'app-detail-movies',
  templateUrl: './detail-movies.component.html',
  styleUrls: ['./detail-movies.component.scss']
})
export class DetailMoviesComponent implements OnInit {

  constructor(
    private rutaActiva: ActivatedRoute,
    private router:Router,
    private moviesService:MoviesService
  ) { }

  ngOnInit(): void {
  }

}
