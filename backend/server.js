const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs-extra');
const XLSX = require('xlsx');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de CORS optimizada para Render
const allowedOrigins = [
  'https://www.cidconsultores.org',
  'https://cidconsultores.org',
  'http://localhost:4200',
  'http://localhost:3000',
  'http://127.0.0.1:4200',
  'http://127.0.0.1:3000',
  'https://cid-fe.onrender.com',
  undefined // Para peticiones sin origen header
];

// Configuración de CORS más permisiva pero segura
const corsOptions = {
  origin: function (origin, callback) {
    // Log para debugging
    console.log('CORS - Origin recibido:', origin);
    console.log('CORS - NODE_ENV:', process.env.NODE_ENV);
    
    // En Render, permitir todos los orígenes de la lista + undefined
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      // Si el origen no está en la lista, verificar si es Render o desarrollo
      if (!origin && process.env.NODE_ENV === 'production') {
        // En producción, permitir peticiones sin origen (puede ser server-to-server)
        callback(null, true);
      } else if (!origin) {
        // En desarrollo, también permitir sin origen
        callback(null, true);
      } else {
        console.log('CORS - Origen bloqueado:', origin);
        callback(new Error('Origen no permitido'));
      }
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  exposedHeaders: ['Content-Length', 'Authorization'],
  maxAge: 600 // Cache preflight por 10 minutos
};

// Aplicar CORS
app.use(cors(corsOptions));

// Middleware personalizado para manejar CORS de manera más flexible
app.use((req, res, next) => {
  const origin = req.headers.origin;
  
  // Si la petición viene de un origen permitido, establecer el header
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  } else if (!origin) {
    // Si no hay origen (peticiones server-to-server o curl), permitir
    res.header('Access-Control-Allow-Origin', '*');
  }
  
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept');
  
  // Manejar preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
});

app.use(bodyParser.json());

// Middleware para logs detallados
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  console.log('Headers:', {
    origin: req.headers.origin,
    'user-agent': req.headers['user-agent'],
    'content-type': req.headers['content-type']
  });
  next();
});

// Rutas de archivos
const DATA_PATH = './data/registros.json';
const EXCEL_PATH = './exports/registros_postales.xlsx';

// Crear archivo si no existe
if (!fs.existsSync(DATA_PATH)) {
  fs.ensureFileSync(DATA_PATH);
  fs.writeJsonSync(DATA_PATH, []);
}

/* =====================================================
   REGISTRO DE USUARIO
===================================================== */
app.post('/api/registro', async (req, res) => {
  console.log('REGISTRO - Body recibido:', req.body);
  
  try {
    const {
      nombre,
      apellidos,
      edad,
      region,
      motivo,
      email,
      password
    } = req.body;

    // Validación básica
    if (!nombre || !email || !password) {
      console.log('REGISTRO - Datos incompletos');
      return res.status(400).json({ 
        error: 'Datos incompletos',
        message: 'Nombre, email y password son requeridos'
      });
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Email inválido',
        message: 'Por favor ingresa un email válido'
      });
    }

    const registros = await fs.readJson(DATA_PATH);

    // Verificar si ya existe
    const existe = registros.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (existe) {
      return res.status(400).json({ 
        error: 'El usuario ya existe',
        message: 'Este email ya está registrado'
      });
    }

    const nuevoRegistro = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      nombre: nombre.trim(),
      apellidos: apellidos ? apellidos.trim() : '',
      edad: edad || null,
      region: region || '',
      motivo: motivo || '',
      email: email.trim().toLowerCase(),
      password: password, // En producción, deberías hashear la contraseña
      fecha: new Date().toISOString()
    };

    registros.push(nuevoRegistro);
    await fs.writeJson(DATA_PATH, registros);

    // Generar Excel de manera asíncrona para no bloquear la respuesta
    setTimeout(() => {
      try {
        generarExcel(registros);
      } catch (excelError) {
        console.error('Error generando Excel:', excelError);
      }
    }, 0);

    res.json({
      success: true,
      message: 'Registro exitoso',
      user: {
        id: nuevoRegistro.id,
        nombre: nuevoRegistro.nombre,
        email: nuevoRegistro.email
      }
    });

  } catch (error) {
    console.error('ERROR REGISTRO:', error);
    res.status(500).json({ 
      error: 'Error interno del servidor',
      message: 'Por favor intenta más tarde'
    });
  }
});

/* =====================================================
   LOGIN DE USUARIO
===================================================== */
app.post('/api/login', async (req, res) => {
  console.log('LOGIN - Intento para:', req.body.email);
  
  try {
    let { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ 
        error: 'Datos incompletos',
        message: 'Email y password son requeridos'
      });
    }

    // Normalización
    email = email.trim().toLowerCase();
    password = password.trim();

    const registros = await fs.readJson(DATA_PATH);

    console.log(`LOGIN - Buscando usuario. Total registros: ${registros.length}`);

    const user = registros.find(
      u =>
        u.email.toLowerCase() === email &&
        u.password === password // Comparación directa (cambiar por hash en producción)
    );

    if (!user) {
      console.log('LOGIN - Credenciales incorrectas para:', email);
      return res.status(401).json({ 
        error: 'Credenciales incorrectas',
        message: 'Email o password incorrectos'
      });
    }

    console.log('LOGIN - Usuario autenticado:', user.email);

    res.json({
      success: true,
      message: 'Login exitoso',
      user: {
        id: user.id,
        nombre: user.nombre,
        email: user.email
      }
    });

  } catch (error) {
    console.error('ERROR LOGIN:', error);
    res.status(500).json({ 
      error: 'Error interno del servidor',
      message: 'Por favor intenta más tarde'
    });
  }
});

/* =====================================================
   HEALTH CHECK (importante para Render)
===================================================== */
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'CID Backend API',
    version: '1.0.0'
  });
});

/* =====================================================
   DESCARGAR EXCEL
===================================================== */
app.get('/api/excel', (req, res) => {
  if (!fs.existsSync(EXCEL_PATH)) {
    return res.status(404).json({ 
      error: 'Archivo no encontrado',
      message: 'No hay registros para exportar'
    });
  }
  
  const filename = `registros_${new Date().toISOString().split('T')[0]}.xlsx`;
  res.download(EXCEL_PATH, filename, (err) => {
    if (err) {
      console.error('Error descargando Excel:', err);
    }
  });
});

/* =====================================================
   GENERAR EXCEL
===================================================== */
function generarExcel(data) {
  try {
    if (!data || data.length === 0) {
      console.log('No hay datos para generar Excel');
      return;
    }
    
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Registros');

    fs.ensureDirSync('./exports');
    XLSX.writeFile(wb, EXCEL_PATH);
    console.log('Excel generado exitosamente');
  } catch (error) {
    console.error('Error generando Excel:', error);
  }
}

/* =====================================================
   INICIAR SERVIDOR
===================================================== */
app.listen(PORT, () => {
  console.log(`✅ Backend corriendo en el puerto ${PORT}`);
  console.log(`🌍 Entorno: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📅 Iniciado: ${new Date().toISOString()}`);
  console.log('🔒 Orígenes permitidos:', allowedOrigins.filter(o => o !== undefined));
});