import { Sequelize } from "sequelize"
import db from "../repositories/conexao.js"

const Cidade = db.define(
    "cidades",
    {
        idCidade: {
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
    { underscored:true }
)

export default Cidade