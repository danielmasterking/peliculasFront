import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
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
