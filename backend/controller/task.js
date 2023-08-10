const Task = require("../models/task");

class Controller {
  // callback functions used in routes
  async getAll(req, res, next) {
    try {
      const tasks = await Task.find({});
      res.status(200).json({ success: true, response: tasks });
    } catch (err) {
      next(err);
    }
  }

  // async get(req, res, next) {
  //   try {
  //     const { id } = req.params;
  //     const task = await Task.findOne({ _id: id });
  //     res.status(200).json({ success: true, response: task });
  //   } catch (err) {
  //     next(err);
  //   }
  // }

  async post(req, res, next) {
    try {
      const body = req.body;
      const task = new Task(body);
      const response = await task.save();
      res.status(200).json({ success: true, response });
    } catch (err) {
      next(err);
    }
  }

  async put(req, res, next) {
    try {
      const { id } = req.params;
      const body = req.body;
      const response = await Task.updateOne({ _id: id }, { $set: body });
      const updatedTask = await Task.findById(id);
      res.status(200).json({ success: true, task: updatedTask });
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const response = await Task.findByIdAndDelete({ _id: id });
      res.status(200).json({ success: true, response });
    } catch (err) {
      next(err);
    }
  }
}

const controller = new Controller();
module.exports = controller;
