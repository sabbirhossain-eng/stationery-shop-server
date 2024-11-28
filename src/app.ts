import express, { Request, Response } from 'express'
import productRouter from './module/stationeryProduct/stationeryProduct.router'
import orderRouter from './module/order/order.router'

const app = express()

// middleware
app.use(express.json())

// API
app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live 💁‍♂️',
  })
})

export default app
