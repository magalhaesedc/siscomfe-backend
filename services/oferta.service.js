import OfertaRepository from "../repositories/oferta.repository.js"

async function buscarOfertas(){
    return OfertaRepository.buscarOfertas()
}

async function buscarOferta(id){
    return OfertaRepository.buscarOferta(id)
}

async function buscarMelhoresOfertas(){
    return OfertaRepository.buscarMelhoresOfertas()
}

async function buscarOfertasProduto(idProduto){
    return OfertaRepository.buscarOfertasProduto(idProduto)
}

async function inserirOferta(oferta){
    return OfertaRepository.inserirOferta(oferta)
}

async function atualizarOferta(oferta){
    return OfertaRepository.atualizarOferta(oferta)
}

async function excluirOferta(id){
    return OfertaRepository.excluirOferta(id)
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