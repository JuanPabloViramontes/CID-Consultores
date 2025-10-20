import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-diplomado',
  standalone: false,
  templateUrl: './diplomado.component.html',
  styleUrl: './diplomado.component.css'
})
export class DiplomadoComponent {
  unidades = [
    {
      titulo: 'I. ADMINISTRACIÓN DE LA SALUD',
      temas: [
        { nombre: 'Teoría general de la administración', link: '/tema/i1' },
        { nombre: 'Planeación estratégica', link: '/tema/i2' },
        { nombre: 'Desarrollo organizacional', link: '/tema/i3' },
        { nombre: 'Administración de recursos humanos, materiales y financieros', link: '/tema/i4' },
      ]
    },
    {
      titulo: 'II. ORGANIZACIÓN DE LOS SERVICIOS DE SALUD',
      temas: [
        { nombre: 'Marco legal de las instituciones de salud', link: '/tema/ii1' },
        { nombre: 'Economía de la salud', link: '/tema/ii2' },
      ]
    },
    {
      titulo: 'III. SALUD Y SOCIEDAD',
      temas: [
        { nombre: 'Bioética y derechos humanos', link: '/tema/iii1' },
        { nombre: 'Calidad en la atención médica', link: '/tema/iii2' },
      ]
    },
    {
      titulo: 'IV. HERRAMIENTAS DE ATENCIÓN A LA SALUD',
      temas: [
        { nombre: 'Estadística', link: '/tema/iv1' },
        { nombre: 'Epidemiología', link: '/tema/iv2' },
        { nombre: 'Metodología de la investigación', link: '/tema/iv3' },
        { nombre: 'Sistemas de información geográfica', link: '/tema/iv4' },
      ]
    },
    {
      titulo: 'V. DESARROLLO DE PROYECTO',
      temas: [
        { nombre: 'Eficiencia presupuestal', link: '/tema/v1' },
        { nombre: 'Eficiencia operativa', link: '/tema/v2' },
        { nombre: 'Atención Preventiva', link: '/tema/v3' },
        { nombre: 'Atención Curativa', link: '/tema/v4' },
        { nombre: 'Línea de vida', link: '/tema/v5' },
      ]
    }
  ];
  sesiones = [
    { nombre: 'Enero 7 (introducción)', link: '/sesion/enero-7' },
    { nombre: 'Enero 14', link: '/sesion/enero-14' },
    { nombre: 'Enero 21', link: '/sesion/enero-21' },
    { nombre: 'Enero 28', link: '/sesion/enero-28' },
    { nombre: 'Febrero 4', link: '/sesion/febrero-4' },
    { nombre: 'Febrero 11', link: '/sesion/febrero-11' },
    { nombre: 'Febrero 18', link: '/sesion/febrero-18' },
    { nombre: 'Febrero 25', link: '/sesion/febrero-25' },
    { nombre: 'Marzo 4', link: '/sesion/marzo-4' },
    { nombre: 'Marzo 11', link: '/sesion/marzo-11' },
    { nombre: 'Marzo 18', link: '/sesion/marzo-18' },
    { nombre: 'Marzo 25', link: '/sesion/marzo-25' },
  ];

}
