import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  nombre: string;
  email: string;
  telefono?: string;
  asunto: string;
  mensaje: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const formData: ContactFormData = await req.json();

    const emailBody = `
      Nueva consulta desde el formulario de contacto de CID Consultores
      
      Nombre: ${formData.nombre}
      Email: ${formData.email}
      Teléfono: ${formData.telefono || 'No proporcionado'}
      Asunto: ${formData.asunto}
      
      Mensaje:
      ${formData.mensaje}
      
      ---
      Este mensaje fue enviado desde el formulario de contacto de CID Consultores.
    `;

    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    
    if (!resendApiKey) {
      console.error('RESEND_API_KEY no está configurada');
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Configuración de correo no disponible' 
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'CID Consultores <onboarding@resend.dev>',
        to: 'jviramontesmarques@gmail.com',
        reply_to: formData.email,
        subject: `Nuevo contacto: ${formData.asunto}`,
        text: emailBody,
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error('Error de Resend:', errorText);
      throw new Error(`Error al enviar email: ${errorText}`);
    }

    const emailResult = await emailResponse.json();

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email enviado correctamente',
        id: emailResult.id 
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error en la función:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Error desconocido' 
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});
