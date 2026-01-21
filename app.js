require('dotenv').config();

const express = require('express');
const cors = require('cors');
const routes = require('./src/routes'); // Ele continua buscando o index.js da pasta routes
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    console.log(`💡 Para ajuda, acesse: http://localhost:${PORT}/ajuda`);
});