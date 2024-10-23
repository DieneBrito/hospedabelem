import { Routes } from '@angular/router';
import { LoginComponent } from '../../src/app/components/login/login.component'
import { MapaComponent } from './components/mapa/mapa.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'mapa',
    component: MapaComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
