import express, { Request, Response } from 'express'

const app = express()

app.get("/", (req: Request, res: Response) => {
    res.send("nice")
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`)
})