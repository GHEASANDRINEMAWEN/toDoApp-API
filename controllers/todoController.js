const _ = require('lodash');
const toDOModel = require('../models/toDo')
const data = require('../data/Task')



// Get a all the tasks created
exports.list_tasks = async (req, res) => {
  console.log('listing the tasks created')
  const Tasks = await toDOModel.find({});
  try {
    res.send(Tasks);
  } catch (error) {
    res.status(500).send(error);
  }
};


//  Create a new task
exports.create_task = async (req, res) => {
  const toDo = new toDOModel(req.body);

  try {
    await toDo.save();
    res.status(201).send(toDo._id);
  } catch (error) {
    res.status(500).send(error);
  }
};



// Getting and displaying a specific task
exports.retrieve_task = async (req, res) => {
  try {
    const taskId = req.params.taskId
    console.log(taskId)
    const task = await toDOModel.find({ _id: taskId });
    if (task.length === 0) {
      return res.status(404).json({ message: "There is no task at that id" })
    }
    else {
      res.send(task);

    }


  } catch (error) {
    res.status(404).send(error.message);
  }
};

// Getting and deleting  a specific task by its id
exports.delete_task = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    console.log("my taskid", taskId);
    const task = await toDOModel.findByIdAndDelete(taskId);
    console.log("responds", task);
    if (!task) {
      return res.status(404).json({ message: "There is no task at that id" });
    }
    else {
      res.status(204).send();
    }

  } catch (error) {
    res.status(404).send(error);
  }
};

// Updating the title
exports.update_task = async (req, res) => {
  try {
    const taskId = req.params.taskId
    const task = await toDOModel.findByIdAndUpdate(taskId, req.body, {
      new: true,

    });
    console.log("my task", task);
    if (!task) {
      return res.status(404).json({ message: "There is no task at that id" })
    }
    else {
      res.status(204).send();
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};





















