import { Routes } from '@angular/router';
import { LoginComponent } from '../../src/app/components/login/login.component'
import { MapaComponent } from './components/mapa/mapa.component';
import { HomeComponent } from './components/home/home.component';
import { PlanoHospedagemComponent } from './components/plano-hospedagem/plano-hospedagem.component';
import { ReservaComponent } from './components/reserva/reserva.component';

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
    path: 'planos',
    component: PlanoHospedagemComponent
  },
  {
    path: 'checkin',
    component: ReservaComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
