import OfertaService from "../services/oferta.service.js"

function getOfertas(req, res, next){

    let list = OfertaService.getOfertas()
    console.log(list)
    res.status(200).send(list)
}

export default {
    getOfertas
}