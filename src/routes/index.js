const express = require('express');
const router = express.Router();

// Importação dos Controllers
const CategoriaController = require('../controllers/CategoriaController');
const EmpregadoController = require('../controllers/EmpregadoController');
const ProgramasController = require('../controllers/ProgramasController');
const MetasCategoriasController = require('../controllers/MetasCategoriasController');
const MetasController = require('../controllers/MetasController');

// 1. Rota de Status (Completa)
router.get('/status', (req, res) => {
    res.json({
        status: "online",
        database: process.env.DB_SERVER,
        datetime: new Date().toLocaleString(),
        uptime: process.uptime().toFixed(2) + "s"
    });
});

// 2. Rota de Ajuda (Documentação Automática)
router.get('/ajuda', (req, res) => {
    res.json({
        mensagem: "Guia de utilização da API ADD-API",
        endpoints_disponiveis: [
            { path: "/categorias", metodos: ["GET", "POST"] },
            { path: "/empregados", metodos: ["GET", "POST"] },
            { path: "/status", metodos: ["GET"] }
        ],
        exemplo_payload_empregado: {
            NR_Matricula: 12345,
            NM_Pessoa: "Nome do Colaborador",
            CD_Categoria: 1,
            CD_Pessoa: "12345"
        }
    });
});

// 3. Rotas dos Recursos (CRUD)
router.get('/categorias', CategoriaController.getAll);
router.post('/categorias', CategoriaController.create);
router.put('/categorias/:id', CategoriaController.update);
router.delete('/categorias/:id', CategoriaController.delete);

router.get('/empregados', EmpregadoController.getAll);
router.get('/empregados/:id', EmpregadoController.getById);
router.post('/empregados', EmpregadoController.create);
router.put('/empregados/:id', EmpregadoController.update);
router.delete('/empregados/:id', EmpregadoController.delete);

router.get('/programas', ProgramasController.getAll);
router.get('/programas/:id', ProgramasController.getById);
router.post('/programas', ProgramasController.create);
router.put('/programas/:id', ProgramasController.update);
router.delete('/programas/:id', ProgramasController.delete);

router.get('/metas-categorias', MetasCategoriasController.getAll);
router.get('/metas-categorias/:id', MetasCategoriasController.getById);
router.post('/metas-categorias', MetasCategoriasController.create);
router.put('/metas-categorias/:id', MetasCategoriasController.update);
router.delete('/metas-categorias/:id', MetasCategoriasController.delete);

router.get('/metas', MetasController.getAll);
router.get('/metas/:id', MetasController.getById);
router.post('/metas', MetasController.create);
router.put('/metas/:id', MetasController.update);
router.delete('/metas/:id', MetasController.delete);

// 4. Fallback: Se a pessoa errar a rota, cai na ajuda
router.use((req, res) => {
    res.status(404).redirect('/ajuda');
});

module.exports = router;