// const {body, param} = require('express-validator');
import {body, param} from 'express-validator'

export const AddTask = [
  body("title").isString().withMessage("Title must be a string").notEmpty().withMessage("Title is Required"),
  body("description").isString().withMessage("Description must be a string").notEmpty().withMessage("Description is Required"),
]

export const UpdateTask = [
  param("id").isString().withMessage("Id Must be String").isMongoId()
    .withMessage("id must a mongo id")
]

export const DeleteTask = [
  param("id").isString().withMessage("Id Must be String").isMongoId()
    .withMessage("id must a mongo id")
]