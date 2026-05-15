// import httpStatus = require("http-status")
import httpStatus from "http-status"
import {TaskService} from "../services/index.js"

export const AddTask = async(req, res) => {
  //console.log(req?.body);
  const res_obj = await TaskService.AddTask(req?.body)
  res.status(res_obj.code).send({res_obj})
}

export const GetAllTask = async(req, res) => {
  //console.log(req?.body);
  const res_obj = await TaskService.GetAllTask()
  res.status(res_obj.code).send({...res_obj})
}

export const UpdateTask = async(req, res) => {
  //console.log(req?.body);
  const res_obj = await TaskService.UpdateTask(req?.params?.id)
  res.status(res_obj.code).send({res_obj})
}

export const DeleteTask = async(req, res) => {
  //console.log(req?.body);
  const res_obj = await TaskService.DeleteTask(req?.params?.id)
  res.status(res_obj.code).send({res_obj})
}