import express, { Request, Response } from 'express'

const app = express()
const port = 3000

let body: any = null

// app.use(express.json({inflate: true}))

app.post('/',async (request: Request, res: Response) => {
    body = request
    res.send()
})

app.get('/', async (_: Request, res: Response) => {
    res.send(body)
})

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})

