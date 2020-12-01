import React from 'react';

const TaskCard = ({task,state,dispatch}) => {
  return (
    <>
      <h2 
      onClick={() => { dispatch( { type: 'TOGGLE_COMPLETED', payload: task } ) }} 
      className={task.completed ? 'completed' : ''}
      >{task.name}</h2>
    </>
  )
}
export default TaskCard