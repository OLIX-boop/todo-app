import { useEffect, useState } from "react";

import BackGround from "./components/background/bg";
import Header from "./components/header/header";
import Input from "./components/input/input";
import Task from "./components/task/task";
import Controls from "./components/controls/controls";

function App() {
  useEffect(()=> {
    console.log("IA")
    window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change',({ matches }) => {
    if (matches) {
      console.log("change to dark mode!")
    } else {
      console.log("change to light mode!")
    }
    })
  }, [])

  const [Tasks, setTasks] = useState([
    { task: "Fare la cacca", completed: false },
    { task: "Allenamento", completed: true },
  ]);
  const [filteredTsk, setFilteredStk] = useState({
    type: "All",
    tsks: [...Tasks],
  });

  const editMSG = () => {};

  const filterMessages = (type: string) => {
    // ["All", "Active", "Completed"]
    if (type === "Active")
      setFilteredStk({
        type: "Active",
        tsks: Tasks.filter((tsk) => !tsk.completed),
      });
    else if (type === "Completed")
      setFilteredStk({
        type: "Completed",
        tsks: Tasks.filter((tsk) => tsk.completed),
      });
    else setFilteredStk({ type: "All", tsks: [...Tasks] }); // All
  };

  useEffect(() => {
    const type = filteredTsk.type;
    if (type === "Active") setFilteredStk({type: "Active",tsks: Tasks.filter((tsk) => !tsk.completed)});
    else if (type === "Completed") setFilteredStk({ type: "Completed", tsks: Tasks.filter((tsk) => tsk.completed)});
    else setFilteredStk({ type: "All", tsks: [...Tasks] });
  }, [Tasks, filteredTsk.type]);

  const createNewTask = (newMsg: string): void => {
    setTasks([...Tasks, { task: newMsg, completed: false }]);
  };

  const deleteMSG = (i: number) => {
    setTasks((prevTasks) => prevTasks.filter((_, index) => index !== i));
  };

  const clearCompleted = () => {
    setTasks((prevTasks) => prevTasks.filter((e) => !e.completed));
  }

  return (
    <>
      <BackGround />

      <div className="content w-[40vw] h-[100vh] bg-red m-auto flex justify-center items-center ">
        <div className="w-full h-[80%]">
          <Header />

          <Input createNewMSG={createNewTask} />

          <div className="todos-container mt-6 dark:bg-elements_black bg-white rounded-md shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            <div className="tasks-container overflow-auto max-h-[57vh]">
              {filteredTsk.tsks.map((e, i) => (
                <Task
                  key={i}
                  msg={e.task}
                  completed={e.completed}
                  index={i}
                  edit={editMSG}
                  deleteTsk={deleteMSG}
                />
              ))}
            </div>

            <Controls tasks={Tasks} filter={filterMessages} clrCompleted={clearCompleted} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
