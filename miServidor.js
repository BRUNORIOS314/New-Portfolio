const express = require('express');
const path = require('path');
const { start } = require('repl');

const app = express();
const puerto = 3000;

// Configurar el middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, + '/public/index.html'));
});

// Iniciar el servidor
app.listen(puerto, () => {
    console.log(`El servidor está escuchando en el puerto ${puerto}`);
});
