import express, { Request, Response } from 'express'
const app = express()


app.use(express.json())

app.use("/", (req:Request, res:Response)=>{
res.status(200).json({
        message: "TEST",
        name: "TEST API",
        version: "1.0.0",
        description: "TEST",
        author: {
            name: "Your Name",
        }
    })
})

export default app
