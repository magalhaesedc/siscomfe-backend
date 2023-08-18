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
    }
}

async function inserirSupermercado(supermercado){
    try {
        return await Supermercado.create(supermercado);
    } catch (err) {
        console.error(err);
        return {}
    }
}

export default { buscarSupermercados, inserirSupermercado };