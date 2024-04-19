const express = require("express");
const Task = require("../models/TaskModel");
const {
  demo,
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  filterTasksbyStatus,
  deleteAllTasks,
  filterTasksbyPriority,
} = require("../controller/taskcontroller");
const router = express.Router();

router.get("/", getAllTasks);
router.post("/", createTask);
router.get("/status/:status", filterTasksbyStatus);
router.get("/priority/:priority", filterTasksbyPriority);
router.delete("/deleteAll", deleteAllTasks);
router.get("/:id", getTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);
router.get("/demo", demo);

module.exports = router;
