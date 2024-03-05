import BackGround from "./components/background/bg"
import Header from "./components/header/header"
import Input from "./components/input/input"
import Task from "./components/task/task"


function App() {

  return (
    <>

    <BackGround/>

    <div className="content w-[40vw] h-[100vh] bg-red m-auto flex justify-center items-center">
      <div className="w-full h-[80%]">
        <Header/>

        <Input/>

        <div className="todos-container mt-6 bg-elements_black rounded-md">

          <div className="tasks-container overflow-auto max-h-[57vh]">
            <Task/>
            <Task/>
            <Task/>
            <Task/>
          </div>

          <div className=" flex w-full justify-between p-4">
            <p className="text-gray-500 hover:text-slate-100">5 Items left</p>

            <div className="flex justify-between gap-2 ">
              <p className="text-gray-500 hover:text-slate-100">All</p>
              <p className="text-gray-500 hover:text-slate-100">Active</p>
              <p className="text-gray-500 hover:text-slate-100">Completed</p>
            </div>

            <p className="text-gray-500 hover:text-slate-100">Clear Completed</p>
          </div>
        </div>

        
      </div>
    </div>

    </>
  )
}


export default App
