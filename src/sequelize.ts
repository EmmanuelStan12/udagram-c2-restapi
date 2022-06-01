import { config } from "./config/config";
import { Sequelize } from "sequelize";

const { username, password, database, host } = config.dev

export const sequelize = new Sequelize({
    username,
    password,
    database,
    host,
    dialect: "postgres",
    storage: ":memory:"
})