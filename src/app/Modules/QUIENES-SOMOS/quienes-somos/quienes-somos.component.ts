import { Component } from '@angular/core';

interface Area {
  titulo: string;
  descripcion: string;
  icono: string;
}

interface Valor {
  titulo: string;
  icono: string;
  descripcion: string;
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
    {
      titulo: 'Profesionalismo',
      icono: 'bi-award',
      descripcion: 'Actuamos con ética y competencia técnica en cada proyecto que realizamos'
    },
    {
      titulo: 'Sustentabilidad',
      icono: 'bi-recycle',
      descripcion: 'Promovemos el equilibrio entre desarrollo económico y preservación ambiental'
    },
    {
      titulo: 'Innovación',
      icono: 'bi-lightbulb',
      descripcion: 'Implementamos soluciones creativas y tecnología de vanguardia'
    },
    {
      titulo: 'Compromiso Social',
      icono: 'bi-heart',
      descripcion: 'Trabajamos por el mejoramiento de las condiciones de vida de las comunidades'
    },
    {
      titulo: 'Integridad',
      icono: 'bi-shield-fill-check',
      descripcion: 'Transparencia y honestidad en todas nuestras acciones y relaciones'
    },
    {
      titulo: 'Calidad',
      icono: 'bi-star-fill',
      descripcion: 'Excelencia en nuestros servicios y cumplimiento de estándares más altos'
    },
    {
      titulo: 'Colaboración',
      icono: 'bi-people',
      descripcion: 'Fomentamos el trabajo en equipo y la participación de todos los actores'
    },
    {
      titulo: 'Excelencia',
      icono: 'bi-trophy',
      descripcion: 'Superamos expectativas con resultados sobresalientes y medibles'
    }
  ];
}
