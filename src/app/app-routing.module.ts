import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { DetailMoviesComponent } from './pages/detail-movies/detail-movies.component';

const routes: Routes = [
  { path: '',component: PeliculasComponent },
  { path: 'detail/:id',component: DetailMoviesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
