import Oferta from "../model/oferta.model.js"
import Supermercado from "../model/supermercado.model.js"
import Produto from "../model/produto.model.js"
import Cidade from "../model/cidade.model.js"
import Categoria from "../model/categoria.model.js"

async function buscarOfertas(){
    try {
        return await Oferta.findAll({
            include: [
                {
                    model: Supermercado, include: [
                        { model: Cidade }
                    ]
                },
                {
                    model: Produto, include: [
                        { model: Categoria }
                    ]
                }
            ]
        });
    } catch (err) {
        console.error(err);
    }
}

export default { buscarOfertas };