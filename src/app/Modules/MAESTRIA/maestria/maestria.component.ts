import { Component } from '@angular/core';

@Component({
  selector: 'app-maestria',
  standalone: false,
  templateUrl: './maestria.component.html',
  styleUrl: './maestria.component.css'
})
export class MaestriaComponent {
  historialChat = [
    'Septiembre 30',
    'Octubre 7',
    'Octubre 14',
    'Octubre 21',
    'Octubre 28',
    'Noviembre 4',
    'Noviembre 11',
    'Noviembre 18',
    'Noviembre 25',
    'Diciembre 2',
    'Diciembre 9',
    'Diciembre 16',
    'Enero 13',
    'Enero 20',
    'Enero 27',
    'Febrero 3',
    'Febrero 10',
    'Febrero 17',
    'Febrero 24',
  ];
  
  getChatHistorialLink(fecha: string): string {
    return '/chat/historial/' + fecha.toLowerCase().replace(/ /g, '-');
  }
  
}
