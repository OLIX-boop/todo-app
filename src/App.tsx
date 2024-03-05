import { useState } from "react";

import BackGround from "./components/background/bg";
import Header from "./components/header/header";
import Input from "./components/input/input";
import Task from "./components/task/task";
import Controls from "./components/controls/controls";

function App() {
  const [Tasks, setTasks] = useState(['ciao', 'noce']);

  const createNewTask = (newMsg:string):void => setTasks([...Tasks, newMsg]);

  const editMSG = () => {};

  const deleteMSG = (i:number) => setTasks((prevTasks) => prevTasks.filter((_, index) => index !== i));
  
  return (
    <>
      <BackGround />

      <div className="content w-[40vw] h-[100vh] bg-red m-auto flex justify-center items-center">
        <div className="w-full h-[80%]">
          <Header />

          <Input createNewMSG={createNewTask} />

          <div className="todos-container mt-6 bg-elements_black rounded-md">
            <div className="tasks-container overflow-auto max-h-[57vh]">
              {Tasks.map((e, i) => <Task key={i} msg={e} index={i} edit={editMSG} deleteTsk={deleteMSG} />)}
            </div>

            <Controls tasks={Tasks}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
