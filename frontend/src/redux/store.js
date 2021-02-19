import { todoReducer } from './reducer/Reducer'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const store = createStore(
    todoReducer,
    applyMiddleware(thunk)
  );

export default store
