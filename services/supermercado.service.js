import SupermercadoRepository from "../repositories/supermercado.repository.js"

async function buscarSupermercados(){
    return SupermercadoRepository.buscarSupermercados()
}

async function buscarSupermercado(id){
    return SupermercadoRepository.buscarSupermercado(id)
}

async function inserirSupermercado(supermercado){
    return SupermercadoRepository.inserirSupermercado(supermercado)
}

async function atualizarSupermercado(supermercado){
    return SupermercadoRepository.atualizarSupermercado(supermercado)
}

export default {
    buscarSupermercados,
    buscarSupermercado,
    inserirSupermercado,
    atualizarSupermercado
}