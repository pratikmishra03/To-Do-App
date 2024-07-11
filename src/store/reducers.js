const initialState = {
    tasks: [],
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        const newTasks = [...state.tasks, action.payload];
        localStorage.setItem('tasks', JSON.stringify(newTasks));
        return {
          ...state,
          tasks: newTasks,
        };
      case 'TOGGLE_TASK':
        const toggledTasks = state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        );
        localStorage.setItem('tasks', JSON.stringify(toggledTasks));
        return {
          ...state,
          tasks: toggledTasks,
        };
      case 'DELETE_TASK':
        const filteredTasks = state.tasks.filter((task) => task.id !== action.payload);
        localStorage.setItem('tasks', JSON.stringify(filteredTasks));
        return {
          ...state,
          tasks: filteredTasks,
        };
      case 'EDIT_TASK':
        const editedTasks = state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, text: action.payload.newText } : task
        );
        localStorage.setItem('tasks', JSON.stringify(editedTasks));
        return {
          ...state,
          tasks: editedTasks,
        };
      case 'LOAD_TASKS':
        return {
          ...state,
          tasks: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  