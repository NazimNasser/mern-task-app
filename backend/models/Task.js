const { Schema, model } = require("mongoose");

const TaskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    dueDate: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { collection: "Task" }
);

const Task = model("Task", TaskSchema);
module.exports = Task;
