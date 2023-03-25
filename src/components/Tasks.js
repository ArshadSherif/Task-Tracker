import React, { useState } from "react";
import Task from "./Task";
import "./Tasks.css";

function Tasks({ tasks, deleteTask, onToggle }) {
  return (
    <div className="task_container">
      {tasks?.docs.map(task => (
        <Task
          key={task.id}
          index={task.id}
          task={task.data()}
          deleteTask={deleteTask}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default Tasks;
