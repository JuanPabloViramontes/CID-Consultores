import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { AuthService } from '../../Modules/SERVICIOS/services/auth.service';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [RouterModule, CommonModule],
})
export class HeaderComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

 ngOnInit(): void {
    // 🔥 Scroll automático en CUALQUIER navegación
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
  }

  get user() {
    return this.authService.getUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  navigateWithScrollTop(url: string) {
    this.router.navigate([url]).then(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}