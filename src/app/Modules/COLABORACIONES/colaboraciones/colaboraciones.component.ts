import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Vinculo {
  titulo: string;
  descripcion: string;
  icono: string;
  link?: string;
}

interface Articulo {
  titulo: string;
  autores: string;
  link?: string;
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
  link?: string;
}

interface Guia {
  titulo: string;
  descripcion: string;
  link?: string;
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
      link: 'https://docs.google.com/viewer?a=v&pid=explorer&chrome=true&srcid=0B9gXbSh3PWBrYzE4ZDFiZGQtODYxNi00NzZlLWI3M2UtOTVmYjkxNDIwOTJk&hl=es'
    },
    {
      titulo: 'El quehacer público',
      autor: 'Lic. Juan José Ochoa Vázquez',
      resumen: 'Obra que analiza el ejercicio de la función pública y su impacto en la sociedad.',
      link: 'https://drive.google.com/file/d/0B9gXbSh3PWBrZTI0NmM4NmQtZmI1OS00NjgzLTllOWMtODg1ODdiYWU4MzJl/view?hl=es&resourcekey=0-x2s_MI2lcgC52xOYAo7Q3g',
    }
  ];

  articulos: Articulo[] = [
    {
      titulo: 'Comunicación educativa del pensamiento ambiental a través de los medios de comunicación',
      autores: 'M. en C. Elba A. Castro Rosales & M. en C. Karin Balzaretti H.',
      link: 'https://docs.google.com/document/d/18Gkkzp1lNnxx5ZFGycJNJX7JqppEe0DVKNQJWnYvUdQ/edit?hl=es&tab=t.0'
    },
    {
      titulo: 'Principios de cartografía en el diseño de SIG participativos',
      autores: 'Lic. Juan José Ochoa Vázquez',
      link: 'https://drive.google.com/file/d/0B9gXbSh3PWBrZTZkYjJlNTgtODVhMC00NjExLTgwMDMtYWM0MGJkMTEzMWRi/view?hl=es&resourcekey=0-8W1ioatQV6WUEb0ZMLmbpg'
    },
    {
      titulo: 'La educación ambiental para la construcción de vías terrestres. Principios y evaluación',
      autores: 'M. en C. Ricardo Ramírez Maciel',
      link: 'https://docs.google.com/document/d/1KASpB-HBDqVjkCeyg0E0vHxY8vIgKRxUKCaf7-md9Xk/edit?hl=es&tab=t.0'
    },
    {
      titulo: 'Modelo para el análisis de la educación ambiental en instituciones gubernamentales',
      autores: 'M. en C. Ricardo Ramírez Maciel & M. en C. Elba A. Castro Rosales',
      link: 'https://drive.google.com/file/d/0B9gXbSh3PWBrYWJlYzcyNjktNjgzNS00YWRjLWFjMDUtMzg1NjBlZGY3MzE4/view?hl=es&resourcekey=0-foIM4EEXzN676EKyQk7CyA'
    },
    {
      titulo: 'Análisis crítico histórico de la representación del territorio',
      autores: 'Biól. Jessica Félix S.',
      link: 'https://drive.google.com/file/d/0B9gXbSh3PWBrNmQzYWI4MWUtNGVlOC00OWEzLWI4MzgtZDc5NjY1NGQ1ODJh/view?hl=es&resourcekey=0-nq7SVDQlQcjOVpefPReE_A'
    },
    {
      titulo: 'El agua en la historia de las culturas',
      autores: 'M. en C. Karin Balzaretti H. & Biól. Jessica Félix S.',
      link: 'https://drive.google.com/file/d/0B9gXbSh3PWBrNjhmMTNmM2UtN2M3ZS00NjA5LThhY2MtZDk0NzExOTM4N2Ux/view?hl=es&resourcekey=0-mal3a2fUNvNCnh8UmuxcMw'
    },
    {
      titulo: 'Principios de educación ambiental pertinentes en la utilización de los SIG',
      autores: 'M en C. Ricardo Ramírez Maciel',
      link: 'https://drive.google.com/file/d/0B9gXbSh3PWBrZDNjMzZjZTctNzRhNS00MDY3LWEwMmYtNzM1NzY4MDgzMjMz/view?hl=es&resourcekey=0-ehbgbT82M7RcyalNnvFtiQ'
    }
  ];

  documentos: Documento[] = [
    { titulo: 'Naturaleza Humana', autor: 'M. en C. Ricardo Ramírez Maciel',
link: 'https://drive.google.com/file/d/0B9gXbSh3PWBrMWM3YTIxM2YtMzE0OC00OWY1LWE4ZDItMzljOGUwNzg1OTll/view?resourcekey=0-WhVMgDf79XqFnW10bLkgFw'
     },
    { titulo: 'Catálogo de fauna con valor ecológico: Cuenca del Río Santiago', autor: 'Biól. Alejandro Castro Castro',
link: 'https://docs.google.com/fileview?id=0B_4vkGXJOjJoYjZkM2Y5ZmMtYjU2NS00MmY2LTg5NTMtOTBkNmY4YTFkYmZh&hl=es'
     },
    { titulo: 'Catálogo de especies vegetales con valor ecológico: Cuenca del Río Santiago', autor: 'Biól. Arturo Castro Castro',
link: 'https://docs.google.com/fileview?id=0B_4vkGXJOjJoZGRiMTgzODEtODMyZi00ZmY1LTllYzYtZTU5NWE4YTRlOGE3&hl=es'
     },
    { titulo: 'Endemismos en Jalisco', autor: 'M. en C. Ricardo Ramírez Maciel',
      link: 'https://docs.google.com/fileview?id=0B_4vkGXJOjJoZjk0YTAyNzMtYzNlMS00OTI1LTk4NmMtNWY5NTg2YjgzN2Fk&hl=es'
     }
  ];

  guias: Guia[] = [
    {
      titulo: 'Digitalización del área de estudio',
      descripcion: 'Sistemas de Información Geográfica Libre (Kosmo 2.0): Digitalización del área de estudio a partir de una imagen aérea o de satélite',
      link: 'https://docs.google.com/fileview?id=0B_4vkGXJOjJoMzFhZmI3MWQtODY4OS00YWI1LWJjNTEtMTkxNzE3MGVjMGJh&hl=es'
    },
    {
      titulo: 'Ajustes al proceso de digitalización',
      descripcion: 'Ajustes al proceso de digitalización del área de estudio a partir de una imagen aérea o de satélite',
      link: 'https://drive.google.com/file/d/0B_4vkGXJOjJoNjVlZmEwZGMtZWQ1My00ZTBlLWI0NDktNDA3MzRkNjgyZDVk/view?hl=es&resourcekey=0-jVY64dkVzwoXyHkaOylktw'
    },
    {
      titulo: 'Importación de ficheros CVS',
      descripcion: 'Importación de una tabla o fichero extensión cvs',
      link: 'https://docs.google.com/fileview?id=0B_4vkGXJOjJoOGQxMmY0ZWEtMWJiMy00MjQzLTg3NzYtZGRmZGJjZjZkODNi&hl=es'
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
abrirVinculo(item: any): void {
    let url = '';

    // 1️⃣ Si el objeto tiene un link directo, lo usa
    if (item.link) {
      url = item.link;
    } else {
      // 2️⃣ Si no, busca en el mapa predefinido de vínculos institucionales
      const links: Record<string, string> = {
        'Maestría en Educación Ambiental': 'https://www.maeaudg.info/',
        'Biología Cotidiana': 'https://www.youtube.com/watch?v=0ORMOVIrR8Y',
        'SIGNOS, A.C.': 'https://signosac.com/',
      };
      url = links[item.titulo] || '';
    }

    // 3️⃣ Si hay URL, abre en nueva pestaña
    if (url) {
      window.open(url, '_blank');
    } else {
      console.warn('⚠️ No se encontró un enlace válido para:', item.titulo);
    }
  }

}
