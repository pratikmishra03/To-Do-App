import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadTasks } from '../store/actions';
import TaskItem from './TaskItem';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  return (
    <div className="task-list animate__animated animate__fadeIn">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
