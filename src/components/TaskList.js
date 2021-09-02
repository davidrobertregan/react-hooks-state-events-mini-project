import React from "react";
import Task from "./Task"

function TaskList( { tasks, currentList, setCurrentList }) {

  function handleDelete(event) {
    const taskName = event.target.previousSibling.textContent
    console.log(taskName)
    setCurrentList(tasks.filter(item => item.text !== taskName))
  }

  return (
    <div className="tasks">
      {currentList.map(task => 
        <Task 
          key={task.text} 
          name={task.text} 
          category={task.category} 
          onHandleDelete={handleDelete}
          />)}
    </div>
  );
}

export default TaskList;
