const Task = require("../models/task");

// add a new task
// get all tasks by userId
// delete a task
// edit a task

const addNewTask = async (req, res) => {
  const { title, description, status, userId, priority } = await req.body;

  //validate schema

  try {
    const newlyCreatedTask = await Task.create({
      title,
      description,
      status,
      userId,
      priority,
    });

    if (newlyCreatedTask) {
      return res.status(200).json({
        success: true,
        message: "Task added successfully",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Some error occurred! Please try again",
      });
    }
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Some error occurred! Please try again",
    });
  }
};

const getAllTasks = async (req, res) => {
  const { id } = req.params;

  try {
    const extractAllTaskByUserId = await Task.find({ userId: id });
    console.log(extractAllTaskByUserId);

    if (extractAllTaskByUserId) {
      return res.status(200).json({
        success: true,
        tasksList: extractAllTaskByUserId,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Some error occurred! Please try again",
      });
    }
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Some error occurred! Please try again",
    });
  }
};

const updateTask = async (req, res) => {
  const { title, description, status, priority, userId, _id } = await req.body;

  try {
    const updateTaskById = await Task.findByIdAndUpdate(
      { _id },
      { title, description, status, priority, userId },
      { new: true }
    );

    if (updateTaskById) {
      return res.status(200).json({
        success: true,
        message: "Task updated successfully",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Some error occurred! Please try again",
      });
    }
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Some error occurred! Please try again",
    });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Task Id required",
      });
    }

    const deleteTaskById = await Task.findByIdAndDelete(id);

    if (deleteTaskById) {
      return res.status(200).json({
        success: true,
        message: "Task deleted successfully",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Some error occurred! Please try again",
      });
    }
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Some error occurred! Please try again",
    });
  }
};

module.exports = { addNewTask, getAllTasks, deleteTask, updateTask };
