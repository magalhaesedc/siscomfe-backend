import OfertaService from "../services/oferta.service.js"

async function buscarOfertas(req, res, next){
    let ofertas = await OfertaService.buscarOfertas()
    res.status(200).json(ofertas)
}

export default {
    buscarOfertas
}