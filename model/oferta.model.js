import { Sequelize } from "sequelize"
import db from "../repositories/conexao.js"
import Supermercado from "./supermercado.model.js"
import Produto from "./produto.model.js"

const Oferta = db.define(
    "ofertas",
    {
        idOferta: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        preco: {
            type: Sequelize.DECIMAL(5,2),
            allowNull: false
        }
    },
    {underscored: true}
)

Oferta.belongsTo(Supermercado, {foreignKey: "idSupermercado"});
Oferta.belongsTo(Produto, {foreignKey: "idProduto"});

export default Oferta