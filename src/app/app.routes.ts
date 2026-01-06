import { Routes } from '@angular/router';
import { HomeComponent } from './Modules/PRINCIPAL/home/home.component';
import { ColaboracionesComponent } from './Modules/COLABORACIONES/colaboraciones/colaboraciones.component';
import { MaestriaComponent } from './Modules/MAESTRIA/maestria/maestria.component';
import { DiplomadoComponent } from './Modules/DIPLOMADO/diplomado/diplomado.component';
import { QuienesSomosComponent } from './Modules/QUIENES-SOMOS/quienes-somos/quienes-somos.component';
import { MapComponent } from './Modules/POSTALES_SONORAS/map/map.component';
import { ServicesComponent } from './Modules/SERVICIOS/services/services.component';
import { ContactoComponent } from './Modules/CONTACTO/contacto.component';
import { ProyectosComponent } from './Modules/PROYECTOS/proyectos.component';
import { BiofrecuenciasComponent } from './Modules/BIOFRECUENCIAS/biofrecuencias.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'servicios',
    component: ServicesComponent,
  },
  {
    path: 'quienes-somos',
    component: QuienesSomosComponent,
  },
    {
    path: 'colaboraciones',
    component: ColaboracionesComponent,
  },
  {
    path: 'maestria-informacion',
    component: MaestriaComponent,
  },
  {
    path: 'diplomado-informacion',
    component: DiplomadoComponent,
  },
    {
    path: 'postales-sonoras',
    component: MapComponent
  },
   {
    path: 'biofrecuencias',
    component: BiofrecuenciasComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'proyectos',
    component: ProyectosComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
