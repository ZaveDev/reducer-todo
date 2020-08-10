import React from 'react';
import { useExtendedReducer } from './hooks/useExtendedReducer'
import TaskCard from './components/TaskCard'


import './App.css';

const initialState = {
  taskList:[],
  formValue:'',
  id:0,

}
function App() {
  const [state, dispatch] = useExtendedReducer(initialState)
console.log(state);
  return (
    <div className="App">
      <input
        type='text'
        name='task'
        onChange={ e =>{ dispatch({ type: 'HANDLE_ONCHANGE', payload: e.target.value})}}
        value={state.formValue}
      />
      <button onClick={() => { dispatch( { type: 'HANDLE_ONSUBMIT', payload: state.formValue } ) }}>add task</button>
      <button onClick={() => { dispatch( { type: 'CLEAR_COMPLETED' } ) }}>clear completed</button>
    {
      state.taskList.map(task => {
        return <TaskCard key={task.id} task={task} state={state} dispatch={dispatch}/>
      })
    }
    </div>
  );
}

export default App;
