import OfertaService from "../services/oferta.service.js"

async function buscarOfertas(req, res, next){
    let ofertas = await OfertaService.buscarOfertas()
    res.status(200).json(ofertas)
}

async function buscarOferta(req, res, next){
    let oferta = await OfertaService.buscarOferta(req.params.id)
    res.status(200).json(oferta)
}

async function buscarMelhoresOfertas(req, res, next){
    let oferta = await OfertaService.buscarMelhoresOfertas(req.params.id)
    res.status(200).json(oferta)
}

async function buscarOfertasProduto(req, res, next){
    let oferta = await OfertaService.buscarOfertasProduto(req.params.idProduto)
    res.status(200).json(oferta)
}

async function inserirOferta(req, res, next){
    let oferta = req.body

    if(!oferta.preco || !oferta.idSupermercado || !oferta.idProduto){
        res.status(403).json({ 'error': 'Preço, ID Supermercado e ID Produto são obrigatórios' })
    }

    oferta = await OfertaService.inserirOferta(oferta)

    res.status(201).send(oferta)
}

async function atualizarOferta(req, res, next){
    let oferta = req.body

    if(!oferta.preco || !oferta.idOferta){
        res.status(403).json({ 'error': 'ID Oferta e Preço são obrigatórios' })
    }

    oferta = await OfertaService.atualizarOferta(oferta)

    res.status(204).send(oferta)
}

async function excluirOferta(req, res, next){
    let oferta = await OfertaService.excluirOferta(req.params.id)
    res.status(204).send(oferta)
}


export default {
    buscarOfertas,
    buscarOferta,
    inserirOferta,
    atualizarOferta,
    excluirOferta,
    buscarMelhoresOfertas,
    buscarOfertasProduto
}