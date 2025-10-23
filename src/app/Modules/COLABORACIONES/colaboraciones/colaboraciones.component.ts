import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Vinculo {
  titulo: string;
  descripcion: string;
  icono: string;
}

interface Articulo {
  titulo: string;
  autores: string;
}

interface Libro {
  titulo: string;
  autor: string;
  resumen: string;
  link?: string;
}

interface Documento {
  titulo: string;
  autor?: string;
}

interface Guia {
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-colaboraciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colaboraciones.component.html',
  styleUrl: './colaboraciones.component.css'
})
export class ColaboracionesComponent {
  seccionActiva: string = 'vinculos';
  libroSeleccionado: Libro | null = null;

  vinculos: Vinculo[] = [
    {
      titulo: 'Maestría en Educación Ambiental',
      descripcion: 'C.U.C.B.A. Universidad de Guadalajara',
      icono: 'bi-mortarboard-fill'
    },
    {
      titulo: 'Biología Cotidiana',
      descripcion: 'Programa de radio',
      icono: 'bi-broadcast'
    },
    {
      titulo: 'SIGNOS, A.C.',
      descripcion: 'Trabajo de campo con estudiantes de Secundaria y Bachillerato',
      icono: 'bi-people-fill'
    }
  ];

  libros: Libro[] = [
    {
      titulo: 'Leer para el Desarrollo',
      autor: 'Ing. José Hugo Ochoa Vázquez',
      resumen: 'La lectura es una actividad elemental en el proceso educativo formal y también para el desarrollo extra escolar de los seres humanos. En ese sentido, bajo una óptica estrictamente propositiva, se realiza un análisis de la situación de la lectura en México, demostrando que a pesar de los recursos destinados a esta actividad y los diferentes esfuerzos que se han realizado en nuestro país para mejorar los niveles de lectura en la población estudiantil, y por ende, generar una cultura de lectura en toda la población, los resultados han sido escasos, lo cual se refleja en diferentes aspectos, tanto en evaluaciones realizadas por organismos internacionales, como en la vida cotidiana.',
      link: '#'
    },
    {
      titulo: 'El quehacer público',
      autor: 'Lic. Juan José Ochoa Vázquez',
      resumen: 'Obra que analiza el ejercicio de la función pública y su impacto en la sociedad.'
    }
  ];

  articulos: Articulo[] = [
    {
      titulo: 'Comunicación educativa del pensamiento ambiental a través de los medios de comunicación',
      autores: 'M. en C. Elba A. Castro Rosales & M. en C. Karin Balzaretti H.'
    },
    {
      titulo: 'Principios de cartografía en el diseño de SIG participativos',
      autores: 'Lic. Juan José Ochoa Vázquez'
    },
    {
      titulo: 'La educación ambiental para la construcción de vías terrestres. Principios y evaluación',
      autores: 'M. en C. Ricardo Ramírez Maciel'
    },
    {
      titulo: 'Modelo para el análisis de la educación ambiental en instituciones gubernamentales',
      autores: 'M. en C. Ricardo Ramírez Maciel & M. en C. Elba A. Castro Rosales'
    },
    {
      titulo: 'Análisis crítico histórico de la representación del territorio',
      autores: 'Biól. Jessica Félix S.'
    },
    {
      titulo: 'El agua en la historia de las culturas',
      autores: 'M. en C. Karin Balzaretti H. & Biól. Jessica Félix S.'
    },
    {
      titulo: 'Principios de educación ambiental pertinentes en la utilización de los SIG',
      autores: 'M en C. Ricardo Ramírez Maciel'
    }
  ];

  documentos: Documento[] = [
    { titulo: 'Naturaleza Humana', autor: 'M. en C. Ricardo Ramírez Maciel' },
    { titulo: 'Catálogo de fauna con valor ecológico: Cuenca del Río Santiago', autor: 'Biól. Alejandro Castro Castro' },
    { titulo: 'Catálogo de especies vegetales con valor ecológico: Cuenca del Río Santiago', autor: 'Biól. Arturo Castro Castro' },
    { titulo: 'Endemismos en Jalisco', autor: 'M. en C. Ricardo Ramírez Maciel' },
    { titulo: 'Evaluación de procesos educativos ambientales en la construcción de vías terrestres', autor: 'M. en C. Ricardo Ramírez Maciel' }
  ];

  guias: Guia[] = [
    {
      titulo: 'Digitalización del área de estudio',
      descripcion: 'Sistemas de Información Geográfica Libre (Kosmo 2.0): Digitalización del área de estudio a partir de una imagen aérea o de satélite'
    },
    {
      titulo: 'Ajustes al proceso de digitalización',
      descripcion: 'Ajustes al proceso de digitalización del área de estudio a partir de una imagen aérea o de satélite'
    },
    {
      titulo: 'Importación de ficheros CVS',
      descripcion: 'Importación de una tabla o fichero extensión cvs'
    }
  ];

  seleccionarSeccion(seccion: string): void {
    this.seccionActiva = seccion;
  }

  abrirLibro(libro: Libro): void {
    this.libroSeleccionado = libro;
  }

  cerrarLibro(): void {
    this.libroSeleccionado = null;
  }
}
