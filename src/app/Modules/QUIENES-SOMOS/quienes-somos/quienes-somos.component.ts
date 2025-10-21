import { Component } from '@angular/core';

interface Area {
  titulo: string;
  descripcion: string;
  icono: string;
}

interface Valor {
  titulo: string;
  icono: string;
}

@Component({
  selector: 'app-quienes-somos',
  standalone: false,
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export class QuienesSomosComponent {
  areas: Area[] = [
    {
      titulo: 'Capacitación y Asesoría',
      descripcion: 'Programas educativos especializados y asesoría técnica profesional',
      icono: 'bi-book-half'
    },
    {
      titulo: 'Planeación Territorial',
      descripcion: 'Ordenamiento y desarrollo territorial sostenible',
      icono: 'bi-map'
    },
    {
      titulo: 'Proyectos Productivos',
      descripcion: 'Desarrollo de iniciativas económicas sustentables',
      icono: 'bi-graph-up-arrow'
    },
    {
      titulo: 'Recursos Naturales',
      descripcion: 'Conservación y manejo sostenible de recursos',
      icono: 'bi-tree'
    },
    {
      titulo: 'Administración de Proyectos',
      descripcion: 'Gestión eficiente y profesional de proyectos',
      icono: 'bi-clipboard-check'
    },
    {
      titulo: 'Planeación Estratégica',
      descripcion: 'Estrategias de desarrollo organizacional',
      icono: 'bi-lightning-charge'
    },
    {
      titulo: 'Educación Ambiental',
      descripcion: 'Programas de conciencia y cultura ambiental',
      icono: 'bi-globe-americas'
    },
    {
      titulo: 'Desarrollo Legal',
      descripcion: 'Asesoría legal especializada en medio ambiente',
      icono: 'bi-shield-check'
    }
  ];

  valores: Valor[] = [
    { titulo: 'Profesionalismo', icono: 'bi-award' },
    { titulo: 'Sustentabilidad', icono: 'bi-recycle' },
    { titulo: 'Innovación', icono: 'bi-lightbulb' },
    { titulo: 'Compromiso Social', icono: 'bi-heart' },
    { titulo: 'Integridad', icono: 'bi-shield-fill-check' },
    { titulo: 'Calidad', icono: 'bi-star-fill' },
    { titulo: 'Colaboración', icono: 'bi-people' },
    { titulo: 'Excelencia', icono: 'bi-trophy' }
  ];
}
