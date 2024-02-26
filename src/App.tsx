function App() {

  return (
    <>
    <div className="bg absolute w-full h-full z-[-1]">
        <img className="w-full h-[40%]" src="../public/images/bg-desktop-dark.jpg" alt="IMG" />
        <div className="w-full h-[60%] bg-background_black"></div>
    </div>
    <div className="content w-[40vw] h-[100vh] bg-red m-auto">
      <div className="w-full h-[80%]">
        <h1>TODO</h1>
      </div>
    </div>

    </>
  )
}


export default App
