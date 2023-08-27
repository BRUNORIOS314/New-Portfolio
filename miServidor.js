const express = require('express');
const app = express();
const path = require('path');

// Configura la carpeta donde se encuentran los archivos estáticos (HTML, CSS, JS, imágenes, etc.).
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para manejar solicitudes a la página de inicio.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Escucha en el puerto 3000 (o el puerto que desees).
const puerto = 3000;
app.listen(puerto, () => {
  console.log(`Servidor Express escuchando en el puerto ${puerto}`);
});


app.use(express.static(path.join(__dirname, 'public')));

// Agrega este manejador de errores después de configurar express.static
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error interno del servidor');
});
