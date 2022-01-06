import express, { Application, Request, Response } from 'express'
import { connectToDB } from './db/db'
import { familyRouter } from './routers/familyRouter'

export const app: Application = express()
const port = 3000

// Body parsing Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({
        message: 'Hello World!',
    })
})
app.use("/api/v1/family", familyRouter)

try {
    connectToDB()
} catch (error) {
    console.error(`Error when connecting to DB`)
}

// const port = process.env.PORT || PORT;
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV !== "test") {
    // supertest handles express app  instances when testing
    app.listen(port, () => {
        console.info(
            `Server listening on port ${port} MODE = ${process.env.NODE_ENV}`
        );
    });
}
