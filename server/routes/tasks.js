const express = require("express");
const Task = require("../models/TaskModel");
const {
  demo,
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controller/taskcontroller");
const router = express.Router();

router.get("/", getAllTasks);
router.post("/", createTask);
router.get("/:id", getTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);
router.get("/demo", demo);

module.exports = router;
