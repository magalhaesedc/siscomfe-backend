import Oferta from "../model/oferta.model.js"
import Supermercado from "../model/supermercado.model.js"
import Produto from "../model/produto.model.js"
import Cidade from "../model/cidade.model.js"
import Categoria from "../model/categoria.model.js"
import { Op, Sequelize } from "sequelize"

async function buscarOfertas(){
    try {
        return await Oferta.findAll({
            include: [
                {
                    model: Supermercado, include: [
                        { model: Cidade }
                    ]
                },
                {
                    model: Produto, include: [
                        { model: Categoria }
                    ]
                }
            ]
        });
    } catch (err) {
        console.error(err);
        return { "error": err }
    }
}

async function buscarMelhoresOfertas(){

    let subQueryIdOfertasMelhores = `
        SELECT o.id_oferta
        FROM ofertas o
        WHERE (o.id_produto, o.preco, o.id_oferta) IN (
            SELECT id_produto, min(preco), min(id_oferta)
            FROM ofertas
            WHERE (id_produto, preco) IN (
                SELECT id_produto, min(preco)
                FROM ofertas
                GROUP BY id_produto
            )
            GROUP BY id_produto
        )
    `

    try {
        return await Oferta.findAll({
            where: { 
                idOferta: [Sequelize.literal(subQueryIdOfertasMelhores)]
            },
            include: [
                {
                    model: Supermercado, include: [
                        { model: Cidade }
                    ]
                },
                {
                    model: Produto, include: [
                        { model: Categoria }
                    ]
                }
            ]
        });
    } catch (err) {
        console.error(err);
        return { "error": err }
    }
}

async function buscarOfertasProduto(idProduto){
    try {
        return await Oferta.findAll({
            where: {
                idProduto: idProduto
            },
            include: [
                {
                    model: Supermercado, include: [
                        { model: Cidade }
                    ]
                },
                {
                    model: Produto, include: [
                        { model: Categoria }
                    ]
                }
            ]
        });
    } catch (err) {
        console.error(err);
        return { "error": err }
    }
}

async function buscarOferta(id){
    try {
        return await Oferta.findByPk(id, {
            include: [
                {
                    model: Supermercado, include: [
                        { model: Cidade }
                    ]
                },
                {
                    model: Produto, include: [
                        { model: Categoria }
                    ]
                }
            ]
        });
    } catch (err) {
        console.error(err);
        return { "error": err }
    }
}

async function inserirOferta(oferta){
    try {
        return await Oferta.create(oferta)
    } catch (err) {
        console.error(err)
        return { "error": err }
    }
}

async function atualizarOferta(oferta){
    try {
        await Oferta.update(oferta, {
            where: { idOferta: oferta.idOferta}
        })
        return { "sucesso": "Oferta atualizado com sucesso" }
    } catch (err) {
        console.error(err)
        return { "error": err }
    }
}

async function excluirOferta(id){
    try {
        await Oferta.destroy({
            where: { idOferta: id }
        })
        return { "sucesso": "Oferta exluída com sucesso" }
    } catch (err) {
        console.error(err)
        return { "error": err }
    }
}

export default { 
    buscarOfertas,
    buscarOferta,
    inserirOferta,
    atualizarOferta,
    excluirOferta,
    buscarMelhoresOfertas,
    buscarOfertasProduto
};