import { useReducer } from 'react'

const reducer = ( state, action ) => {
  switch (action.type) {
    case 'HANDLE_ONCHANGE':
      return {
        ...state, 
        formValue: action.payload
      }

    case 'HANDLE_ONSUBMIT':
      const newTask = {
        id: state.id,
        name: action.payload,
        completed: false
      }
      return {
        ...state, 
          taskList: [...state.taskList, newTask],
          formValue:'',
          id: state.id + 1,

      }

    case 'TOGGLE_COMPLETED':
      let id = action.payload.id
      let comp = action.payload.completed
      let list = {
        ...state,
        taskList: [state.taskList.map((todo) => {
          if (todo.id === id) {
            console.log(todo.completed)
            return {
              ...todo,
              completed: !comp,
            };
          } else {
            return todo;
          }
        })],
      }
      console.log(list);
   
      return { ...list }
    
    case 'CLEAR_COMPLETED':
      let stillDue = state.taskList.filter(task => task.completed === false)
      return { 
        ...state, 
        taskList: stillDue 
      }

    default:
      return state
  }
}
export const useExtendedReducer = (initialState) => {
  const [state, dispatch] = useReducer( reducer, initialState)

  return [state, dispatch]
}

