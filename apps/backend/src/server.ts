import express, { Application, Request, Response } from "express";

const app : Application = express()
const port = 3000

app.use(express.json())

app.get("/", (req : Request, res : Response) => {
    try {
        res.json({ message : "hello world GUYA"})
    } catch (error) {
        res.status(500).json({ message : error})
    }
})


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})