import express from 'express'
const router = express.Router()
import TaskRoute from './Task.routes.js'

const routes = [
  {
    path: '/task',
    route: TaskRoute
  }
]

routes.forEach((cur, i) => {
  router.use(cur.path, cur.route)
})

export default router