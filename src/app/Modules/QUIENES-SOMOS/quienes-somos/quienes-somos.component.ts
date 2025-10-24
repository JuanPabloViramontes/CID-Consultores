import { Component } from '@angular/core';

interface Area {
  titulo: string;
  descripcion: string;
  detalle: string;
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
      detalle: 'Desarrollamos diplomados, talleres y programas de capacitación en gestión ambiental, ordenamiento territorial y desarrollo sustentable. Brindamos asesoría especializada para instituciones públicas y privadas.',
      icono: 'bi-book-half'
    },
    {
      titulo: 'Planeación Territorial',
      descripcion: 'Ordenamiento y desarrollo territorial sostenible',
      detalle: 'Elaboramos planes de ordenamiento ecológico territorial, estudios de uso de suelo y estrategias de desarrollo regional que integran aspectos ambientales, sociales y económicos.',
      icono: 'bi-map'
    },
    {
      titulo: 'Proyectos Productivos',
      descripcion: 'Desarrollo de iniciativas económicas sustentables',
      detalle: 'Diseñamos e implementamos proyectos productivos que generan beneficios económicos mientras conservan los recursos naturales, enfocados en comunidades rurales y sectores agrícolas.',
      icono: 'bi-graph-up-arrow'
    },
    {
      titulo: 'Recursos Naturales',
      descripcion: 'Conservación y manejo sostenible de recursos',
      detalle: 'Realizamos estudios de impacto ambiental, planes de manejo de áreas naturales protegidas, y evaluaciones de biodiversidad para garantizar la conservación de ecosistemas.',
      icono: 'bi-tree'
    },
    {
      titulo: 'Administración de Proyectos',
      descripcion: 'Gestión eficiente y profesional de proyectos',
      detalle: 'Coordinamos y supervisamos proyectos complejos desde su diseño hasta su implementación, asegurando cumplimiento de objetivos, tiempos y presupuestos establecidos.',
      icono: 'bi-clipboard-check'
    },
    {
      titulo: 'Planeación Estratégica',
      descripcion: 'Estrategias de desarrollo organizacional',
      detalle: 'Facilitamos procesos de planeación estratégica participativa, diagnósticos organizacionales y diseño de políticas públicas ambientales para instituciones y organizaciones.',
      icono: 'bi-lightning-charge'
    },
    {
      titulo: 'Educación Ambiental',
      descripcion: 'Programas de conciencia y cultura ambiental',
      detalle: 'Creamos programas educativos innovadores, materiales didácticos y campañas de sensibilización para fomentar una cultura de sustentabilidad en comunidades y escuelas.',
      icono: 'bi-globe-americas'
    },
    {
      titulo: 'Desarrollo Legal',
      descripcion: 'Asesoría legal especializada en medio ambiente',
      detalle: 'Ofrecemos consultoría en normatividad ambiental, trámites de permisos y licencias, y desarrollo de marcos jurídicos para proyectos de aprovechamiento de recursos naturales.',
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
  ];
}
