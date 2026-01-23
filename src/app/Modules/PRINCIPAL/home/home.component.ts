import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: false
})
export class HomeComponent implements OnInit {
  
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private route: ActivatedRoute // Agrega esto si necesitas manejar fragmentos
  ) {}

  ngOnInit() {
    // Si necesitas manejar fragmentos de URL
    this.route.fragment.subscribe(fragment => {
      if (fragment === 'projects') {
        setTimeout(() => {
          this.scrollTo('projects');
        }, 100);
      }
    });
  }

  scrollTo(elementId: string): void {
    const element = this.document.getElementById(elementId);
    if (element) {
      const yOffset = -80; // Ajusta según la altura de tu navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  }
}