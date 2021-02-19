import {GET_TODO,ADD_TODO} from  '../action/TodoType'
const initialState = {
  record:[],
  todo:''
}
 export const todoReducer= (state = initialState, action) => {
  //  console.log(`value of state is ${state}`);
   console.log(`action value is ${action}`);
  switch (action.type)
  {
  case GET_TODO:
    return { ...state, 
      record:action.payload 
    }
    case ADD_TODO:
      return { ...state, 
        record:action.payload 
      }
  default:
    return state
  }
}
export default todoReducer;
