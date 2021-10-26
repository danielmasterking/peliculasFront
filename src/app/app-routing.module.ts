import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/product/product.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { SearchProductComponent } from './pages/search-product/search-product.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { DetailMoviesComponent } from './pages/detail-movies/detail-movies.component';

const routes: Routes = [
  { path: '',component: PeliculasComponent },
  { path: 'detail/:id',component: DetailMoviesComponent },
  { path: 'product',component: ProductComponent ,  canActivate: [AuthGuard]},
  { path: 'create-product',component: CreateProductComponent ,  canActivate: [AuthGuard]},
  { path: 'search-product',component: SearchProductComponent ,  canActivate: [AuthGuard]},
  { path: 'profile',component: ProfileComponent ,  canActivate: [AuthGuard]},
  { path: 'register',component: UserRegisterComponent ,  canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
