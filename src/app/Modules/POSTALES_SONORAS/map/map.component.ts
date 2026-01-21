import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  @ViewChild('mapFrame') mapFrame!: ElementRef<HTMLIFrameElement>;

  isLoggedIn = false;
  isLoading = true;
  zoomLevel = 1;
  isPlayingAmbient = false;

  particles: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkLoginStatus();
    this.generateParticles();

    // Simular carga del mapa
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  checkLoginStatus() {
    const user = localStorage.getItem('user');
    this.isLoggedIn = !!user;
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  generateParticles() {
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

    if (this.isPlayingAmbient) {
      console.log('Reproduciendo sonido ambiente del agua');
    } else {
      console.log('Pausando sonido ambiente');
    }
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
    if (!this.mapFrame) return;

    const iframe = this.mapFrame.nativeElement;
    iframe.style.transform = `scale(${this.zoomLevel})`;
    iframe.style.transformOrigin = 'center center';
  }

  showInstructions() {
    alert(
      'Para navegar por el mapa:\n\n' +
      '1. Haz clic en los puntos para escuchar los sonidos\n' +
      '2. Usa los botones + y - para acercar o alejar\n' +
      '3. Activa el sonido ambiente para una experiencia completa'
    );
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.wave1') as HTMLElement;
    if (parallax) {
      parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  }
}
