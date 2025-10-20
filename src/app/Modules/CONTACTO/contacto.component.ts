import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  nombre: string;
  email: string;
  telefono: string;
  asunto: string;
  mensaje: string;
}

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  formData: ContactForm = {
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  };

  enviando = false;
  mensajeExito = false;
  mensajeError = false;

  async enviarFormulario(): Promise<void> {
    if (!this.validarFormulario()) {
      return;
    }

    this.enviando = true;
    this.mensajeExito = false;
    this.mensajeError = false;

    try {
      const supabaseUrl = 'https://fhwckpjyisutwpbsdwqj.supabase.co';
      const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZod2NrcGp5aXN1dHdwYnNkd3FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5NzU1NTksImV4cCI6MjA3NjU1MTU1OX0.Imy_pYCRz_tzOb_YANUQa6p2u2X121EQ2Njjt2mmxRA';

      const response = await fetch(`${supabaseUrl}/functions/v1/send-contact-email`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.formData)
      });

      if (response.ok) {
        this.mensajeExito = true;
        this.resetearFormulario();
      } else {
        this.mensajeError = true;
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      this.mensajeError = true;
    } finally {
      this.enviando = false;
    }
  }

  validarFormulario(): boolean {
    return !!(
      this.formData.nombre.trim() &&
      this.formData.email.trim() &&
      this.formData.asunto.trim() &&
      this.formData.mensaje.trim()
    );
  }

  resetearFormulario(): void {
    this.formData = {
      nombre: '',
      email: '',
      telefono: '',
      asunto: '',
      mensaje: ''
    };
  }
}
