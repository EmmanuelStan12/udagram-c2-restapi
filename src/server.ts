import express, { Request, Response } from 'express'
import { initialize, sequelize } from './sequelize'

const app = express();

app.use(express.json());

(async () => {
    await initialize(sequelize)
})();

app.get("/", (req: Request, res: Response) => {
    res.send("nice")
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`)
})