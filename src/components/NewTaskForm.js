import React, {useState} from "react";
import { TASKS } from "../data";


function NewTaskForm({ categories, onTaskFormSubmit }) {
  let newCategories = categories.slice(1)

  const [newTask, setNewTask] = useState("")
  const [newCat, setNewCat] = useState("Code")

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit(newTask, newCat)
  }
  
  // function onTaskFormSubmit(e){
  //   e.preventDefault();
  //   let newTask = {
  //     text: e.target[0].value,
  //     category: e.target[1].value
  //   }
  // }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={newTask} 
          onChange={e => setNewTask(e.target.value)} 
        />
      </label>
      <label>
        Category
        <select 
          name="category" 
          value={newCat} 
          onChange={e => setNewCat(e.target.value)}
          >
            {newCategories.map(cat => 
              <option key={cat}>
                {cat}
              </option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
