import express, { Request, Response } from 'express'

const app = express()

// middleware
app.use(express.json())

// POST API

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live 💁‍♂️',
  })
})

export default app
