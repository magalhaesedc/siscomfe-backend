import ProdutoRepository from "../repositories/produto.repository.js"

async function buscarProdutos(){
    return ProdutoRepository.buscarProdutos()
}

async function inserirProduto(produto){
    return ProdutoRepository.inserirProduto(produto)
}

export default {
    buscarProdutos,
    inserirProduto
}