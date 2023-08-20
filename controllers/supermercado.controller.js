import SupermercadoService from "../services/supermercado.service.js"

async function buscarSupermercados(req, res, next){
    let supermercados = await SupermercadoService.buscarSupermercados()
    res.status(200).json(supermercados)
}

async function buscarSupermercado(req, res, next){
    let supermercado = await SupermercadoService.buscarSupermercado(req.params.id)
    res.status(200).json(supermercado)
}

async function inserirSupermercado(req, res, next){
    let supermercado = req.body

    if(!supermercado.nome || !supermercado.endereco || !supermercado.idCidade){
        res.status(403).json({'error': 'Nome, Endereço e ID Cidade são obrigatórios'})
    }

    supermercado = await SupermercadoService.inserirSupermercado(supermercado)

    res.status(200).send(supermercado)
}

async function atualizarSupermercado(req, res, next){
    let supermercado = req.body

    if(!supermercado.idSupermercado || !supermercado.nome || !supermercado.endereco || !supermercado.idCidade){
        res.status(403).json({'error': 'ID Supermercado, Nome, Endereço e ID Cidade são obrigatórios'})
    }

    supermercado = await SupermercadoService.atualizarSupermercado(supermercado)

    res.status(200).send(supermercado)
}

export default {
    buscarSupermercados,
    buscarSupermercado,
    inserirSupermercado,
    atualizarSupermercado
}