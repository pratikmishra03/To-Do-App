import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import taskReducer from './reducers/taskReducer';

const store = createStore(taskReducer, composeWithDevTools());

export default store;
