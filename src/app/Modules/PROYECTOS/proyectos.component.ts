import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Proyecto {
  id: number;
  titulo: string;
  descripcion: string;
  categoria: string;
}

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  categoriaSeleccionada: string = 'todos';
  proyectoSeleccionado: Proyecto | null = null;

  categorias = [
    { id: 'todos', nombre: 'Todos los Proyectos', icono: 'bi-grid-3x3-gap' },
    { id: 'administracion', nombre: 'Administración y Planeación', icono: 'bi-building-gear' },
    { id: 'educacion', nombre: 'Educación y Capacitación', icono: 'bi-book-half' },
    { id: 'recursos', nombre: 'Recursos Naturales', icono: 'bi-tree' },
    { id: 'sig', nombre: 'Sistemas de Información Geográfica', icono: 'bi-globe-americas' },
    { id: 'productivos', nombre: 'Proyectos Productivos', icono: 'bi-graph-up-arrow' }
  ];

  proyectos: Proyecto[] = [
    {
      id: 1,
      titulo: 'Planta de Tratamiento de Vinazas',
      descripcion: 'Estudio técnico, económico y jurídico respecto a las alternativas de instalación de una planta de tratamiento de vinazas.',
      categoria: 'administracion'
    },
    {
      id: 2,
      titulo: 'Registro de Software Municipal',
      descripcion: 'Registro de software propiedad del Ayuntamiento de Guadalajara.',
      categoria: 'administracion'
    },
    {
      id: 3,
      titulo: 'Base de Datos Gastronómica',
      descripcion: 'Elaboración de bases de datos sobre Gastronomía en Zacatecas.',
      categoria: 'administracion'
    },
    {
      id: 4,
      titulo: 'Levantamiento de Usos de Suelo',
      descripcion: 'Levantamiento de usos de suelo de Guadalajara.',
      categoria: 'administracion'
    },
    {
      id: 5,
      titulo: 'Estudios Socioeconómicos',
      descripcion: 'Estudios socioeconómicos a solicitantes de permiso de taxi.',
      categoria: 'administracion'
    },
    {
      id: 6,
      titulo: 'Estudio de Opinión Municipal',
      descripcion: 'Estudio de opinión sobre servicios municipales de Guadalajara.',
      categoria: 'administracion'
    },
    {
      id: 7,
      titulo: 'Programas de Desarrollo Comunitario',
      descripcion: 'Elaboración de programas de desarrollo comunitario. Proyecto Comunidades Quiroga.',
      categoria: 'administracion'
    },
    {
      id: 8,
      titulo: 'Estudio de Impacto PRO-SNI',
      descripcion: 'Estudio de impacto del PRO-SNI para miembros del SNI y del SNCA.',
      categoria: 'administracion'
    },
    {
      id: 9,
      titulo: 'Diplomado en Servicios de Salud',
      descripcion: 'Diplomado en administración de servicios de salud con calidad (en línea).',
      categoria: 'educacion'
    },
    {
      id: 10,
      titulo: 'Guías de Gestión de Residuos',
      descripcion: 'Elaboración de guías para la gestión y el abordaje transversal de los residuos (SEMARNAT).',
      categoria: 'educacion'
    },
    {
      id: 11,
      titulo: 'Guías sobre Biodiversidad',
      descripcion: 'Guías sobre biodiversidad (SEMARNAT - SEJ).',
      categoria: 'educacion'
    },
    {
      id: 12,
      titulo: 'Taller de SIG',
      descripcion: 'Taller de sistemas de información geográfica para la promoción comunitaria y la educación ambiental.',
      categoria: 'educacion'
    },
    {
      id: 13,
      titulo: 'Diplomado en Cambio Climático',
      descripcion: 'Diplomado en cambio climático y justicia ambiental.',
      categoria: 'educacion'
    },
    {
      id: 14,
      titulo: 'Asesoría en Organización Administrativa',
      descripcion: 'Asesoría en organización y métodos administrativos.',
      categoria: 'educacion'
    },
    {
      id: 15,
      titulo: 'Taller de Indicadores Ambientales',
      descripcion: 'Taller de indicadores para educadores ambientales.',
      categoria: 'educacion'
    },
    {
      id: 16,
      titulo: 'Asesoría en SIG',
      descripcion: 'Asesoría en sistemas de información geográfica (SIG).',
      categoria: 'educacion'
    },
    {
      id: 17,
      titulo: 'Juegos Didácticos Ambientales',
      descripcion: 'Diseño de juegos didácticos educativos ambientales.',
      categoria: 'educacion'
    },
    {
      id: 18,
      titulo: 'Gestión Ambiental Municipal',
      descripcion: 'Curso - taller sobre sistemas de gestión ambiental municipal.',
      categoria: 'educacion'
    },
    {
      id: 19,
      titulo: 'Ordenamiento Territorial',
      descripcion: 'Curso - taller sobre ordenamiento territorial para la gestión ambiental.',
      categoria: 'educacion'
    },
    {
      id: 20,
      titulo: 'Estudios de Impacto Ambiental',
      descripcion: 'Estudios de impacto ambiental para aprovechamiento geológico.',
      categoria: 'recursos'
    },
    {
      id: 21,
      titulo: 'Ordenamiento Turístico Sierra del Tigre',
      descripcion: 'Ordenamiento turístico de la Sierra del Tigre.',
      categoria: 'recursos'
    },
    {
      id: 22,
      titulo: 'Indicadores de Sustentabilidad',
      descripcion: 'Elaboración de bases de datos sobre indicadores de sustentabilidad.',
      categoria: 'recursos'
    },
    {
      id: 23,
      titulo: 'Plan Rector de Microcuencas',
      descripcion: 'Plan rector de producción y conservación (PRPC 4 microcuencas en Tizapán el Alto).',
      categoria: 'recursos'
    },
    {
      id: 24,
      titulo: 'Levantamiento Topográfico',
      descripcion: 'Levantamiento topográfico del corredor de movilidad Calzada Independencia.',
      categoria: 'sig'
    },
    {
      id: 25,
      titulo: 'Mecánica de Suelos',
      descripcion: 'Mecánica de suelos y evaluación de pavimentos.',
      categoria: 'sig'
    },
    {
      id: 26,
      titulo: 'Mapas Temáticos',
      descripcion: 'Diseño de mapas temáticos para estudios de impacto ambiental.',
      categoria: 'sig'
    },
    {
      id: 27,
      titulo: 'Modelos Digitales de Elevación',
      descripcion: 'Diseño de modelos digitales de elevación de tres perfiles del Estado de Jalisco.',
      categoria: 'sig'
    },
    {
      id: 28,
      titulo: 'Proyecto Agropecuario Jamay',
      descripcion: 'Proyecto productivo integral agropecuario en el municipio de Jamay.',
      categoria: 'productivos'
    },
    {
      id: 29,
      titulo: 'Engorda de Tilapia',
      descripcion: 'Proyecto de engorda intensiva de tilapia hormonada en el Municipio de Jamay.',
      categoria: 'productivos'
    },
    {
      id: 30,
      titulo: 'Producción de Bagre',
      descripcion: 'Proyecto de producción del Bagre en el Municipio de Tizapán.',
      categoria: 'productivos'
    }
  ];

  get proyectosFiltrados(): Proyecto[] {
    if (this.categoriaSeleccionada === 'todos') {
      return this.proyectos;
    }
    return this.proyectos.filter(p => p.categoria === this.categoriaSeleccionada);
  }

  seleccionarCategoria(categoria: string): void {
    this.categoriaSeleccionada = categoria;
  }

  abrirDetalle(proyecto: Proyecto): void {
    this.proyectoSeleccionado = proyecto;
  }

  cerrarDetalle(): void {
    this.proyectoSeleccionado = null;
  }

  getIconoCategoria(categoria: string): string {
    const cat = this.categorias.find(c => c.id === categoria);
    return cat ? cat.icono : 'bi-folder';
  }

  getNombreCategoria(categoria: string): string {
    const cat = this.categorias.find(c => c.id === categoria);
    return cat ? cat.nombre : categoria;
  }
}
