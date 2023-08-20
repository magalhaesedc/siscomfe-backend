import Supermercado from "../model/supermercado.model.js"
import Cidade from "../model/cidade.model.js"

async function buscarSupermercados(){
    try {
        return await Supermercado.findAll({
            include: [
                { model: Cidade }
            ]
        });
    } catch (err) {
        console.error(err);
        return { "error": err }
    }
}

async function buscarSupermercado(id){
    try {
        return await Supermercado.findByPk(id, {
            include: [
                { model: Cidade }
            ]
        });
    } catch (err) {
        console.error(err);
        return { "error": err }
    }
}

async function inserirSupermercado(supermercado){
    try {
        return await Supermercado.create(supermercado);
    } catch (err) {
        console.error(err);
        return { "error": err }
    }
}

async function atualizarSupermercado(supermercado){
    try {
        await Supermercado.update(supermercado, {
            where: { idSupermercado: supermercado.idSupermercado }
        });
        return { "sucesso": "Produto atualizado com sucesso" }
    } catch (err) {
        console.error(err);
        return { "error": err }
    }
}

export default {
    buscarSupermercados,
    buscarSupermercado,
    inserirSupermercado,
    atualizarSupermercado
};