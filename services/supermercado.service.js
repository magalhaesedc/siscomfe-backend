import SupermercadoRepository from "../repositories/supermercado.repository.js"

async function buscarSupermercados(){
    return SupermercadoRepository.buscarSupermercados()
}

async function inserirSupermercado(supermercado){
    return SupermercadoRepository.inserirSupermercado(supermercado)
}

export default {
    buscarSupermercados,
    inserirSupermercado
}