import { config } from "./config/config";
import { Sequelize } from "sequelize-typescript";
import { V0MODELS } from "./controllers/v0/model.router";

const { username, password, database, host } = config.dev

export const sequelize = new Sequelize({
    username,
    password,
    database,
    host,
    dialect: "postgres",
    storage: ":memory:"
})

export const initialize = async function(sequelize: Sequelize) {
    await sequelize.addModels(V0MODELS)
    await sequelize.sync()
}