import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../SERVICIOS/services/auth.service';
import { environment } from '../../../environments/environment';

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

  // CORRECCIÓN: Declara API_URL como propiedad pública
  API_URL = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {
    // Para debugging
    console.log('API URL:', this.API_URL);
    console.log('Environment production:', environment.production);
  }

  toggleMode(event: Event) {
    event.preventDefault();
    this.isRegister = !this.isRegister;
    
    // Resetear el formulario al cambiar modo
    if (!this.isRegister) {
      this.formData = {
        nombre: '',
        apellidos: '',
        edad: null,
        region: '',
        motivo: '',
        email: '',
        password: ''
      };
    }
  }

  onSubmit() {
    // Validación básica
    if (this.isRegister) {
      // Validación para registro
      if (!this.formData.nombre || !this.formData.email || !this.formData.password) {
        alert('Por favor complete todos los campos obligatorios');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.formData.email)) {
        alert('Por favor ingrese un email válido');
        return;
      }
      
      this.registrarUsuario();
    } else {
      // Validación para login
      if (!this.formData.email || !this.formData.password) {
        alert('Por favor ingrese email y contraseña');
        return;
      }
      
      this.iniciarSesion();
    }
  }

  private registrarUsuario() {
    const url = `${this.API_URL}/registro`;
    console.log('Registrando usuario en:', url);
    
    // Limpiar datos antes de enviar
    const datosEnvio = {
      nombre: this.formData.nombre.trim(),
      apellidos: this.formData.apellidos.trim(),
      edad: this.formData.edad,
      region: this.formData.region.trim(),
      motivo: this.formData.motivo.trim(),
      email: this.formData.email.trim().toLowerCase(),
      password: this.formData.password
    };
    
    this.http.post<any>(url, datosEnvio)
      .subscribe({
        next: (res) => {
          console.log('Registro exitoso:', res);
          if (res.success && res.user) {
            this.authService.login(res.user);
            this.router.navigate(['/home']);
          } else {
            alert(res.error || 'Error en el registro');
          }
        },
        error: (err) => {
          console.error('Error en registro:', err);
          const errorMessage = err.error?.message || err.error?.error || 'Error en el registro';
          alert(errorMessage);
        }
      });
  }

  private iniciarSesion() {
    const url = `${this.API_URL}/login`;
    console.log('Iniciando sesión en:', url);
    
    const datosLogin = {
      email: this.formData.email.trim().toLowerCase(),
      password: this.formData.password
    };
    
    this.http.post<any>(url, datosLogin)
      .subscribe({
        next: (res) => {
          console.log('Login exitoso:', res);
          if (res.success && res.user) {
            this.authService.login(res.user);
            this.router.navigate(['/postales-sonoras']);
          } else {
            alert(res.error || 'Error en el login');
          }
        },
        error: (err) => {
          console.error('Error en login:', err);
          const errorMessage = err.error?.message || err.error?.error || 'Credenciales incorrectas';
          alert(errorMessage);
        }
      });
  }

  // Método para debugging - prueba la conexión al backend
  testConnection() {
    const healthUrl = `${this.API_URL.replace('/api', '')}/api/health`;
    console.log('Probando conexión a:', healthUrl);
    
    this.http.get(healthUrl).subscribe({
      next: (res) => {
        console.log('Conexión exitosa:', res);
        alert(`Conexión exitosa: ${JSON.stringify(res)}`);
      },
      error: (err) => {
        console.error('Error de conexión:', err);
        alert(`Error de conexión: ${err.message}`);
      }
    });
  }
}