import SupermercadoService from "../services/supermercado.service.js"

async function buscarSupermercados(req, res, next){
    let supermercados = await SupermercadoService.buscarSupermercados()
    res.status(200).json(supermercados)
}

async function inserirSupermercado(req, res, next){
    let supermercado = req.body

    if(!supermercado.nome || !supermercado.endereco || !supermercado.idCidade){
        res.status(403).json({'error': 'Nome, Endereço e ID Cidade são obrigatórios'})
    }

    supermercado = await SupermercadoService.inserirSupermercado(supermercado)

    res.status(200).send(supermercado)
}

export default {
    buscarSupermercados,
    inserirSupermercado
}