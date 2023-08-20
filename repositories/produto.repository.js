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
        console.error(err)
        return { "error": err }
    }
}

async function buscarProduto(id){
    try {
        return await Produto.findByPk(id, {
            include: [ 
                { model: Categoria }
            ]
        });
    } catch (err) {
        console.error(err)
        return { "error": err }
    }
}

async function inserirProduto(produto){
    try {
        return await Produto.create(produto)
    } catch (err) {
        console.error(err)
        return { "error": err }
    }
}

async function atualizarProduto(produto){
    try {
        await Produto.update(produto, {
            where: { idProduto: produto.idProduto }
        })
        return { "sucesso": "Produto atualizado com sucesso" }
    } catch (err) {
        console.error(err)
        return { "error": err }
    }
}

export default {
    buscarProdutos,
    buscarProduto,
    inserirProduto,
    atualizarProduto
};