import OfertaRepository from "../repositories/oferta.repository.js"

async function buscarOfertas(){
    return OfertaRepository.buscarOfertas()
}

export default {
    buscarOfertas
}