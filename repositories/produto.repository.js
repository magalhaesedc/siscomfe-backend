import Produto from "../model/produto.model.js"
import Categoria from "../model/categoria.model.js"

async function buscarProdutos(){
    try {
        return await Produto.findAll({
            include: [ 
                { model: Categoria }
            ]
        });
    } catch (err) {
        console.error(err);
    }
}

async function inserirProduto(produto){
    try {
        return await Produto.create(produto);
    } catch (err) {
        console.error(err);
        return {}
    }
}

export default { buscarProdutos, inserirProduto };