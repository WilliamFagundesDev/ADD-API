class BaseController {
    constructor(service) {
        this.service = service;
    }

    // Adicione o método getAll
    getAll = async (req, res) => {
        try {
            const data = await this.service.getAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Adicione o método getById
    getById = async (req, res) => {
        try {
            const data = await this.service.getById(req.params.id);
            if (!data) return res.status(404).json({ message: "Registro não encontrado" });
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    create = async (req, res) => {
        try {
            const fields = this.service.requiredFields || [];
            
            for (const field of fields) {
                if (!req.body[field]) {
                    return res.status(400).json({ 
                        erro: `O campo ${field} é obrigatório conforme as regras da entidade.` 
                    });
                }
            }

            await this.service.create(req.body);
            res.status(201).json({ message: "Criado com sucesso" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    update = async (req, res) => {
        try {
            const { id } = req.params;
            const result = await this.service.update(id, req.body);
            
            if (result.rowsAffected[0] === 0) {
                return res.status(404).json({ message: "Registro não encontrado para atualizar." });
            }
            
            res.json({ message: "Atualizado com sucesso!" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    delete = async (req, res) => {
        try {
            const { id } = req.params;
            const result = await this.service.delete(id);
            
            if (result.rowsAffected[0] === 0) {
                return res.status(404).json({ message: "Registro não encontrado para excluir." });
            }
            
            res.json({ message: "Excluído com sucesso!" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = BaseController;