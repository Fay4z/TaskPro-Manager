const Task = require("../models/TaskModel");

const demo = (req, res) => {
  res.send("Hello World! from tasks");
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTask = async (req, res) => {
  const task = new Task({
    title: req.body.title,
    status: req.body.status,
    priority: req.body.priority,
    dueDate: req.body.dueDate,
    description: req.body.description,
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

    // const task = await Task.findByIdAndUpdate(req.params.id);
    // task.title = req.body.title;
    // task.status = req.body.status;
    // task.priority = req.body.priority;
    // task.dueDate = req.body.dueDate;
    // task.description = req.body.description;
    // const updatedTask = await task.save();
    // res.json(updatedTask);
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

const deleteAllTask = async (req, res) => {
  try {
    const tasks = await Task.deleteMany();
    res.json(tasks);
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
};
