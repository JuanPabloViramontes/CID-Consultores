import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
 @ViewChild('mapFrame') mapFrame!: ElementRef;
  
  particles: any[] = [];
  isPlayingAmbient = false;
  isLoading = true;
  zoomLevel = 1;
  
  // Sonido ambiente (simulado)
  ambientSound: any;

  ngOnInit() {
    this.generateParticles();
    
    // Simular carga del mapa
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  generateParticles() {
    // Generar partículas para el fondo
    for (let i = 0; i < 30; i++) {
      this.particles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        delay: Math.random() * 5
      });
    }
  }

  toggleAmbientSound() {
    this.isPlayingAmbient = !this.isPlayingAmbient;
    
    // En una implementación real, aquí controlarías la reproducción de audio
    if (this.isPlayingAmbient) {
      console.log('Reproduciendo sonido ambiente del agua');
      // this.ambientSound.play();
    } else {
      console.log('Pausando sonido ambiente');
      // this.ambientSound.pause();
    }
  }

  showInstructions() {
    alert('Para navegar por el mapa:\n\n1. Haz clic en los puntos marcados para escuchar los sonidos\n2. Usa los botones + y - para acercar/alejar\n3. Activa el sonido ambiente para una experiencia completa');
  }

  zoomIn() {
    this.zoomLevel = Math.min(this.zoomLevel + 0.1, 2);
    this.applyZoom();
  }

  zoomOut() {
    this.zoomLevel = Math.max(this.zoomLevel - 0.1, 0.5);
    this.applyZoom();
  }

  applyZoom() {
    const iframe = this.mapFrame.nativeElement;
    iframe.style.transform = `scale(${this.zoomLevel})`;
    iframe.style.transformOrigin = 'center center';
  }

  // Efecto de parallax al desplazarse
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.wave1') as HTMLElement;
    if (parallax) {
      parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  }
}