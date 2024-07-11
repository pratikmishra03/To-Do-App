export const addTask = (text) => {
    return {
      type: 'ADD_TASK',
      payload: {
        id: Date.now(),
        text,
        completed: false,
      },
    };
  };
  
  export const toggleTask = (id) => {
    return {
      type: 'TOGGLE_TASK',
      payload: id,
    };
  };
  
  export const deleteTask = (id) => {
    return {
      type: 'DELETE_TASK',
      payload: id,
    };
  };
  
  export const editTask = (id, newText) => {
    return {
      type: 'EDIT_TASK',
      payload: { id, newText },
    };
  };
  
  export const loadTasks = () => {
    return {
      type: 'LOAD_TASKS',
      payload: JSON.parse(localStorage.getItem('tasks')) || [],
    };
  };
  
  export const saveTasks = (tasks) => {
    return {
      type: 'SAVE_TASKS',
      payload: tasks,
    };
  };
  