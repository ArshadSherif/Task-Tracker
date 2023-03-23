import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./Task.css";

function Task({ task, deleteTask, onToggle }) {
  return (
    <div
      className={`task ${task.reminder ? "reminder " : " "}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <DeleteOutlineIcon
          className="remove_task"
          onClick={() => deleteTask(task.id)}
        />
      </h3>
      <p>{task.date}</p>
    </div>
  );
}

export default Task;
