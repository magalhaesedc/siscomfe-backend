import { Sequelize } from "sequelize"

const sequelize = new Sequelize(
    "postgresql://postgres:postgres@localhost:5432/siscomfe",
    {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
)

export default sequelize