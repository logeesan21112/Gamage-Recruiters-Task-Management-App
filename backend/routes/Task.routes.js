import express from 'express'
const router = express.Router()
import {TaskController} from './../controllers/index.js'
import {TaskValidation} from './../validations/index.js'
import {validation} from './../middlewares/validate.js'

// http://localhost:5000/api/v1/task

router.route("/")
  // - GET
  .get(TaskController.GetAllTask)
  // - POST
  .post(TaskValidation.AddTask, validation, TaskController.AddTask)

// http://localhost:5000/api/vl/task/:id

router.route("/:id")
  // - PUT
  .put(TaskValidation.UpdateTask, validation, TaskController.UpdateTask)
  // - DELETE
  .delete(TaskValidation.DeleteTask, validation, TaskController.DeleteTask)

export default router