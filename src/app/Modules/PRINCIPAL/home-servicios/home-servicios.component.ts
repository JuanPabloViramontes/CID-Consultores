import { Component } from '@angular/core';

interface Servicio {
  id: string;
  titulo: string;
  icono: string;
  descripcionCorta: string;
  descripcionDetallada: string;
  items: string[];
}

@Component({
  selector: 'app-home-servicios',
  templateUrl: './home-servicios.component.html',
  styleUrl: './home-servicios.component.css',
  standalone: false,
})
export class HomeServiciosComponent {
  servicioSeleccionado: Servicio | null = null;

  servicios: Servicio[] = [
    {
      id: 'admin',
      titulo: 'Administración y Planeación',
      icono: 'bi-building-gear',
      descripcionCorta: 'Diseño y ejecución de estrategias administrativas y de planificación territorial con enfoque sostenible.',
      descripcionDetallada: 'Ofrecemos servicios integrales de administración y planeación para proyectos de desarrollo sostenible, incluyendo gestión de trámites, ordenamiento territorial y licencias ambientales.',
      items: [
        'Gestoría y trámites especializados',
        'Administración profesional de proyectos',
        'Levantamiento detallado de usos de suelo',
        'Programas de Ordenamiento Territorial',
        'Licencia Ambiental Única (LAU)'
      ]
    },
    {
      id: 'educacion',
      titulo: 'Educación y Capacitación',
      icono: 'bi-book-half',
      descripcionCorta: 'Desarrollo de programas formativos y diplomados en gestión ambiental, servicios de salud y más.',
      descripcionDetallada: 'Diseñamos e implementamos programas educativos y de capacitación especializados en medio ambiente, SIG y desarrollo comunitario para fortalecer competencias profesionales.',
      items: [
        'Diseño de material educativo innovador',
        'Talleres de capacitación ambiental',
        'Programas de educación ambiental',
        'Comunicación y difusión ambiental',
        'Talleres especializados en SIG',
        'Facilitación comunitaria participativa'
      ]
    },
    {
      id: 'recursos',
      titulo: 'Recursos Naturales',
      icono: 'bi-tree',
      descripcionCorta: 'Conservación, evaluación y aprovechamiento sostenible de recursos naturales en distintas regiones.',
      descripcionDetallada: 'Realizamos estudios técnicos especializados para la conservación y aprovechamiento responsable de recursos naturales, con énfasis en la protección de flora y fauna.',
      items: [
        'Informes preventivos de impacto ambiental',
        'Estudios técnicos y programas de manejo',
        'Manifestaciones de Impacto Ambiental (MIA)',
        'Inventarios especializados de flora y fauna',
        'Fotografía y documentación de campo'
      ]
    },
    {
      id: 'sig',
      titulo: 'Sistemas de Información Geográfica',
      icono: 'bi-globe-americas',
      descripcionCorta: 'Diseño e implementación de SIG para análisis territorial, planificación y visualización de datos.',
      descripcionDetallada: 'Desarrollamos sistemas de información geográfica personalizados para análisis territorial, cartografía digital y gestión de información espacial.',
      items: [
        'Cartografía digital profesional',
        'Digitalización de información geográfica',
        'Mapas temáticos especializados',
        'Georreferenciación de precisión',
        'Diseño e implementación de SIG'
      ]
    },
    {
      id: 'productivo',
      titulo: 'Desarrollo Productivo',
      icono: 'bi-graph-up-arrow',
      descripcionCorta: 'Impulso a iniciativas locales con enfoque en productividad, sostenibilidad y economía social.',
      descripcionDetallada: 'Apoyamos el diseño e implementación de proyectos productivos sustentables que impulsan el desarrollo económico local y la economía social.',
      items: [
        'Diseño de proyectos productivos sustentables',
        'Orientación de actividades económicas',
        'Gestión de recursos y apoyos financieros'
      ]
    },
    {
      id: 'consultoria',
      titulo: 'Consultoría Especializada',
      icono: 'bi-people-fill',
      descripcionCorta: 'Soluciones personalizadas para necesidades específicas de su organización.',
      descripcionDetallada: 'Brindamos consultoría especializada adaptada a las necesidades específicas de cada cliente, con enfoque en desarrollo sostenible y gestión ambiental integral.',
      items: [
        'Análisis y diagnóstico organizacional',
        'Estrategias de desarrollo sostenible',
        'Asesoría en gestión ambiental',
        'Soluciones personalizadas'
      ]
    }
  ];

  abrirModal(servicio: Servicio): void {
    this.servicioSeleccionado = servicio;
  }

  cerrarModal(): void {
    this.servicioSeleccionado = null;
  }
}
