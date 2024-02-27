import BackGround from "./components/background/bg"
import Header from "./components/header/header"
import Input from "./components/input/input"


function App() {

  return (
    <>

    <BackGround/>

    <div className="content w-[40vw] h-[100vh] bg-red m-auto flex justify-center items-center">
      <div className="w-full h-[80%]">
        <Header/>

        <Input/>

        <div className="todos-container">


        </div>

        
      </div>
    </div>

    </>
  )
}


export default App
