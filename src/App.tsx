import { useEffect, useState } from "react";

import BackGround from "./components/background/bg";
import Header from "./components/header/header";
import Input from "./components/input/input";
import Task from "./components/task/task";
import Controls from "./components/controls/controls";

function App() {
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

  return (
    <>
      <BackGround />

      <div className="content w-[40vw] h-[100vh] bg-red m-auto flex justify-center items-center">
        <div className="w-full h-[80%]">
          <Header />

          <Input createNewMSG={createNewTask} />

          <div className="todos-container mt-6 bg-elements_black rounded-md">
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

            <Controls tasks={Tasks} filter={filterMessages} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
