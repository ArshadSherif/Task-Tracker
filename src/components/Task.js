import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./Task.css";

function Task({ index,task, deleteTask, onToggle }) {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : " "}`}
      onDoubleClick={() => onToggle(index,task)}
    >
      <h3>
        {task.text}{" "}
        <DeleteOutlineIcon
          className="remove_task"
          onClick={() => deleteTask(index)}
        />
      </h3>
      <p>{task.date}</p>
    </div>
  );
}

export default Task;
