import ProdutoService from "../services/produto.service.js"

async function buscarProdutos(req, res, next){
    let produtos = await ProdutoService.buscarProdutos()
    res.status(200).json(produtos)
}

async function buscarProduto(req, res, next){
    let produto = await ProdutoService.buscarProduto(req.params.id)
    res.status(200).json(produto)
}

async function inserirProduto(req, res, next){
    let produto = req.body

    if(!produto.descricao || !produto.idCategoria){
        res.status(403).json({'error': 'Descricao e ID Categoria são obrigatórios'})
    }

    produto = await ProdutoService.inserirProduto(produto)

    res.status(200).send(produto)
}

async function atualizarProduto(req, res, next){
    let produto = req.body

    if(!produto.idProduto || !produto.descricao || !produto.idCategoria){
        res.status(403).json({'error': 'ID Produto, Descricao e ID Categoria são obrigatórios'})
    }

    produto = await ProdutoService.atualizarProduto(produto)

    res.status(200).send(produto)
}

export default {
    buscarProdutos,
    buscarProduto,
    inserirProduto,
    atualizarProduto
}