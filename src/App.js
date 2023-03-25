import { useEffect, useState } from "react";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import {
  useCollectionData,
  useCollection,
} from "react-firebase-hooks/firestore";
import Tasks from "./components/Tasks";
import "./App.css";
import { db } from "./firebase";

function App() {
  // const [data] = useCollectionData(db.collection("tasks"));
  const [tasks] = useCollection(db.collection("tasks"));
  console.log(tasks);
  // console.log(data);

  // const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   if (data) {
  //     setTasks(data);
  //   }
  // }, [data]);

  const [showAddTask, setShowAddTask] = useState(false);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    db.collection("tasks").add({
      id: id,
      text: task.text,
      date: task.date,
      reminder: task.reminder,
    });
  };

  //Delete Task
  const deleteTask = (id) => {
    const docref = db.collection("tasks").doc(id);
    docref.delete().then(() => {
      console.log("deleted");
    });

    // setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const togglereminder = (id, data) => {
    const docref = db.collection("tasks").doc(id);
    docref.set({
      id: data.id,
      text: data.text,
      date: data.date,
      reminder: !data.reminder,
    });

    // setTasks(
    //   tasks.map((task) =>
    //     task.id === id ? { ...task, reminder: !task.reminder } : task
    //   )
    // );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks?.docs.length > 0 ? (
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          onToggle={togglereminder}
        />
      ) : (
        " No Tasks To Show"
      )}
    </div>
  );
}

export default App;
