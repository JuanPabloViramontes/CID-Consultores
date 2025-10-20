import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeServiciosComponent } from './home-servicios/home-servicios.component';
import { MaestriaComponent } from '../MAESTRIA/maestria/maestria.component';
import { RouterModule } from '@angular/router';
import { DiplomadoComponent } from '../DIPLOMADO/diplomado/diplomado.component';
import { MapComponent } from '../POSTALES_SONORAS/map/map.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeServiciosComponent,
    MaestriaComponent,
    DiplomadoComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    RouterModule 
  ],
})
export class HomeModule { }
