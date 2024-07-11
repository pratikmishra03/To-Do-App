import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask, editTask } from '../store/actions';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
};
  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTask(task.id, newText));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''} animate__animated animate__fadeIn`}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span onClick={() => dispatch(toggleTask(task.id))}>{task.text}</span>
      )}
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </div>
  );
};

export default TaskItem;
