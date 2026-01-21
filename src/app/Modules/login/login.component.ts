import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../SERVICIOS/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isRegister = false;

  formData = {
    nombre: '',
    apellidos: '',
    edad: null as number | null,
    region: '',
    motivo: '',
    email: '',
    password: ''
  };

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  toggleMode(event: Event) {
    event.preventDefault();
    this.isRegister = !this.isRegister;
  }

  onSubmit() {
    if (this.isRegister) {
      this.http.post<any>('http://localhost:3000/api/registro', this.formData)
        .subscribe({
          next: (res) => {
            this.authService.login(res.user);
            this.router.navigate(['/home']);
          },
          error: () => alert('Error en el registro')
        });
    } else {
      this.http.post<any>('http://localhost:3000/api/login', {
  email: this.formData.email.trim(),
  password: this.formData.password.trim()
      }).subscribe({
        next: (res) => {
          this.authService.login(res.user);
          this.router.navigate(['/postales-sonoras']);
        },
        error: () => alert('Correo o contraseña incorrectos')
      });
    }
  }
}
