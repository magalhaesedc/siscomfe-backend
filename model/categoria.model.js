import { Sequelize } from "sequelize"
import db from "../repositories/conexao.js"

const Categoria = db.define(
    "categorias",
    {
        idCategoria: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        descricao: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    { underscored: true }
)

export default Categoria