import ProdutoRepository from "../repositories/produto.repository.js"

async function buscarProdutos(){
    return ProdutoRepository.buscarProdutos()
}

async function buscarProduto(id){
    return ProdutoRepository.buscarProduto(id)
}

async function inserirProduto(produto){
    return ProdutoRepository.inserirProduto(produto)
}

async function atualizarProduto(produto){
    return ProdutoRepository.atualizarProduto(produto)
}

export default {
    buscarProdutos,
    buscarProduto,
    inserirProduto,
    atualizarProduto
}