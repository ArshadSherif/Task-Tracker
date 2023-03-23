import React, { useState } from "react";
import Task from "./Task";
import "./Tasks.css";

function Tasks({ tasks, deleteTask, onToggle }) {
  return (
    <div className="task_container">
      {tasks?.map((task) => (
        <Task
          index={task.id}
          task={task}
          deleteTask={deleteTask}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default Tasks;
