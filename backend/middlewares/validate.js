import {validationResult} from 'express-validator'
import httpStatus from 'http-status'

export const validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors)
    res.status(httpStatus.BAD_REQUEST).send({
      msg: errors?.errors?.map((c) => c.msg)[0],
      errors: errors?.errors?.map((c) => c.msg),
      success: false,
      code: httpStatus.BAD_REQUEST
    })
    return
  }
  next()
}