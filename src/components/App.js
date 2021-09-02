import React, { useState }from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [currentList, setCurrentList] = useState(TASKS)

  function onTaskFormSubmit(newTask, newCat){
  const newItem = {
    text: newTask,
    category: newCat
  }
  setCurrentList([...currentList, newItem])
}

  function handleFilterClick(e) {
    if(e.target.className === "selected" ) {
      e.target.classList.remove('selected')
      setCurrentList(TASKS)
    } else {
      e.target.className = "selected" 

      setCurrentList(
        e.target.textContent === "All" ? TASKS : TASKS.filter(item => e.target.textContent === item.category))
      }
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleFilterClick={handleFilterClick} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={TASKS} currentList={currentList} setCurrentList={setCurrentList}/>
    </div>
  );
}

export default App;
