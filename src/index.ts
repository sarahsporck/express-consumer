import express, { Request, Response } from 'express'

const app = express()
const port = 3000

let body: any = null

app.use(express.json({inflate: true}))
app.use(express.text())

app.post('/',async (request: Request, res: Response) => {
    body = request.body
    console.log(body)
    res.end()
})

app.get('/', async (_: Request, res: Response) => {
    res.send(body)
})

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})

