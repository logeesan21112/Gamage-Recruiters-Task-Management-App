import express from 'express'
import morgan from 'morgan';
import Routes from './routes/index.js'
import cors from 'cors'
const app = express();

// middleware
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes
app.use("/api/v1", Routes)

// 404
app.use((req, res) => {
  res.send({
    code: 404,
    msg: "Page not found",
    success: false
  })
  return
})

export default app