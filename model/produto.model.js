import { Sequelize } from "sequelize"
import db from "../repositories/conexao.js"
import Categoria from "./categoria.model.js"

const Produto = db.define(
    "produtos",
    {
        idProduto: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        descricao:{
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    { underscored: true }
)

Produto.belongsTo(Categoria, { foreignKey: "idCategoria" })

export default Produto