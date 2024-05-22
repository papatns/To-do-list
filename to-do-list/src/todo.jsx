import React, { useState } from "react";
import "./todo.css";
import ListItem from "./listitem.jsx";

const todo = () => {
  const [task, setTask] = useState("");
  const [arrayTask, setArrayTask] = useState([]);
  function deleteTask(tasks) {
    setArrayTask(arrayTask.filter(element => element !== tasks))
  }
  return (
    // <div>todo</div>

    <div className="container">
      <div className="card">
        <div className="HEADER">TODO LIST</div>
        <div className="line"></div>
        <input
          type="text"
          className="input-list"
          placeholder="enter items"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        {console.log(task)}

        <button
          className="btn"
          onClick={() => {
            setArrayTask([...arrayTask, task]);
            setTask("");
          }}
        >
          ADD
        </button>
        {console.log(arrayTask)}

        {arrayTask.map((listItem, index) =>{
             return(
              <ListItem item1={listItem} item2="delete" item3="edit"  item4={deleteTask}/>
             )
            })}
      </div>
    </div>
  );
};

export default todo;
