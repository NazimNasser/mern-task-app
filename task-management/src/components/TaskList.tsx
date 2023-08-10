import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { deleteTask, updateTask } from '../redux/tasksSlice';
import TaskFilters from './TaskFilters';
import TaskItem from './TaskItem';
import { RootState } from '../redux/store';
const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [editedTask, setEditedTask] = useState<Task | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [showCompleted, setShowCompleted] = useState(true);
  const [dueDateFilter, setDueDateFilter] = useState('');

  const handleDeleteTask = async (taskId: string) => {
    try {
      await axios.delete(`http://localhost:5000/task/${taskId}`);
      dispatch(deleteTask(taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleCompleteTask = async (taskId: string, isCompleted: boolean) => {
    try {
      const response = await axios.put(`http://localhost:5000/task/${taskId}`, {
        completed: isCompleted,
      });
      dispatch(updateTask(response.data.task));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleEditTask = (task: Task) => {
    setEditedTask(task);
  };

  const handleSaveEdit = async () => {
    if (editedTask) {
      try {
        const response = await axios.put(`http://localhost:5000/task/${editedTask._id}`, editedTask);
        dispatch(updateTask(response.data.task));
        setEditedTask(null);
      } catch (error) {
        console.error('Error updating task:', error);
      }
    }
  };

  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleToggleCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  const handleFilterByDueDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDueDateFilter(event.target.value);
  };

  if (!tasks) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div className="max-w-[80%] mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Task List</h2>
      <TaskFilters
        sortOrder={sortOrder}
        showCompleted={showCompleted}
        dueDateFilter={dueDateFilter}
        onSort={handleSort}
        onToggleCompleted={handleToggleCompleted}
        onFilterByDueDate={handleFilterByDueDate}
      />
      <div className="flex flex-wrap -mx-2">
        {tasks
          .filter((task) => (showCompleted ? true : !task.completed))
          .filter((task) => (dueDateFilter ? task.dueDate === dueDateFilter : true))
          .sort((a, b) => {
            const aValue = new Date(a.dueDate).getTime();
            const bValue = new Date(b.dueDate).getTime();
            return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
          }).map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              editedTask={editedTask}
              onEdit={handleEditTask}
              onSaveEdit={handleSaveEdit}
              onComplete={handleCompleteTask}
              onDelete={handleDeleteTask}
              onCancelEdit={() => setEditedTask(null)}
              isEditing={editedTask && editedTask._id === task._id}
            />
          ))}
      </div>
    </div>
  );
};

export default TaskList;
