import { Sequelize } from "sequelize"
import db from "../repositories/conexao.js"
import Cidade from "./cidade.model.js"

const Supermercado = db.define(
    "supermercados",
    {
        idSupermercado: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        endereco: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {underscored: true}
)

Supermercado.belongsTo(Cidade, {foreignKey: "idCidade"})

export default Supermercado