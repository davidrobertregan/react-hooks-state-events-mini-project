import React from "react";

function Task({ category, name, onHandleDelete }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{name}</div>
      <button onClick={onHandleDelete}className="delete">X</button>
    </div>
  );
}

export default Task;
