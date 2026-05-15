import httpStatus from "http-status"
import { TaskModel } from "../models/index.js";

export const AddTask = async(body) => {
  try {
    const {title, description} = body
    await TaskModel.Task.create({
      title, description
    })
    return {
      code: httpStatus.CREATED,
      success: true,
      msg: "Task Created"
    }
  } catch (error) {
    return {
      code: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      msg: error.message
    }
  }
}

export const GetAllTask = async() => {
  try {
    const tasks = await TaskModel.Task.find({
    })
    return {
      code: httpStatus.OK,
      success: true,
      msg: "Task Fetched",
      AllTask: tasks,
      total: tasks.length,
    }
  } catch (error) {
    return {
      code: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      msg: error.message,
      AllTask: [],
      total: 0,
    }
  }
}

export const UpdateTask = async(id) => {
  try {
    const tasks = await TaskModel.Task.findByIdAndUpdate(id, {
      $set: {
        status: true
      }
    })

    if (!tasks) {
      return {
        code: httpStatus.NOT_FOUND,
        success: false,
        msg: "Task Not Found"
      }
    }

    if (tasks.status) {
      return {
        code: httpStatus.BAD_REQUEST,
        success: false,
        msg: "Task Already Completed",
      }
    }
    return {
      code: httpStatus.OK,
      success: true,
      msg: "Task Updated",
    }
  } catch (error) {
    return {
      code: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      msg: error.message,
    }
  }
}

export const DeleteTask = async(id) => {
  try {
    const tasks = await TaskModel.Task.findByIdAndDelete(id)
    if (!tasks) {
      return {
        code: httpStatus.NOT_FOUND,
        success: false,
        msg: "Task Not Found"
      }
    }

    return {
      code: httpStatus.OK,
      success: true,
      msg: "Task Deleted",
    }
  } catch (error) {
    return {
      code: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      msg: error.message,
    }
  }
}