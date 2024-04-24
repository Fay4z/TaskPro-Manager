const Task = require("../models/TaskModel");

const demo = (req, res) => {
  res.send("Hello World! from tasks");
};

const getAllTasks = async (req, res) => {
  try {
    const user_id = req.user._id;
    const tasks = await Task.find({ user_id }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTask = async (req, res) => {
  const user_id = req.user._id;
  const task = new Task({
    title: req.body.title,
    status: req.body.status,
    priority: req.body.priority,
    dueDate: req.body.dueDate,
    description: req.body.description,
    user_id,
  });
  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.json(task);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndUpdate({ _id: id }, { ...req.body });
    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndDelete({ _id: id });
    res.json(task);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteAllTasks = async (req, res) => {
  try {
    const tasks = await Task.deleteMany();
    res.json(tasks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const filterTasksbyStatus = async (req, res) => {
  try {
    const user_id = req.user._id;

    const { status } = req.params;
    console.log(status);
    const tasks = await Task.find({ user_id, status: status }).sort({
      createdAt: -1,
    });

    if (tasks.length == 0) {
      res.json({ message: "no tasks to display with this status" });
    } else {
      res.json(tasks);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const filterTasksbyPriority = async (req, res) => {
  try {
    const { priority } = req.params;
    console.log(priority);
    const tasks = await Task.find({ priority: priority });

    if (tasks.length == 0) {
      res.json({ message: "no tasks to display with this priority" });
    } else {
      res.json(tasks);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  demo,
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  deleteAllTasks,
  filterTasksbyStatus,
  filterTasksbyPriority,
};
