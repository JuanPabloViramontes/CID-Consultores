const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs-extra');
const XLSX = require('xlsx');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

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
  console.log('BODY RECIBIDO:', req.body);
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

    if (!nombre || !email || !password) {
      return res.status(400).json({ error: 'Datos incompletos' });
    }

    const registros = await fs.readJson(DATA_PATH);

    // Verificar si ya existe
    const existe = registros.find(u => u.email === email);
    if (existe) {
      return res.status(400).json({ error: 'El usuario ya existe' });
    }

   const nuevoRegistro = {
  id: Date.now(), // o crypto.randomUUID()
  nombre,
  apellidos,
  edad,
  region,
  motivo,
  email,
  password,
  fecha: new Date().toISOString()
};


    registros.push(nuevoRegistro);
    await fs.writeJson(DATA_PATH, registros);

    generarExcel(registros);

  res.json({
  success: true,
  user: {
    id: nuevoRegistro.id,
    nombre: nuevoRegistro.nombre,
    email: nuevoRegistro.email
  }
});

  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

/* =====================================================
   LOGIN DE USUARIO
===================================================== */
app.post('/api/login', async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Datos incompletos' });
    }

    // 🔑 NORMALIZACIÓN
    email = email.trim().toLowerCase();
    password = password.trim();

    const registros = await fs.readJson(DATA_PATH);

    console.log('LOGIN INTENTO:', email, password);
    console.log('USUARIOS REGISTRADOS:', registros);

    const user = registros.find(
      u =>
        u.email.toLowerCase() === email &&
        String(u.password) === String(password)
    );

    if (!user) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    res.json({
      success: true,
      user: {
        id: user.id,
        nombre: user.nombre,
        email: user.email
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});


/* =====================================================
   DESCARGAR EXCEL
===================================================== */
app.get('/api/excel', (req, res) => {
  if (!fs.existsSync(EXCEL_PATH)) {
    return res.status(404).json({ error: 'Archivo no encontrado' });
  }
  res.download(EXCEL_PATH);
});

/* =====================================================
   GENERAR EXCEL
===================================================== */
function generarExcel(data) {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Registros');

  fs.ensureDirSync('./exports');
  XLSX.writeFile(wb, EXCEL_PATH);
}

/* =====================================================
   INICIAR SERVIDOR
===================================================== */
app.listen(PORT, () => {
  console.log(`✅ Backend corriendo en http://localhost:${PORT}`);
});
