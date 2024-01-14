import Header from "./Components/Header"
import TodoList from "./Components/TodoList"


function App() {

  return (

    <div className="w-screen h-screen flex flex-col items-center bg-slate-900 py-10">
      <div className="w-[40%] flex flex-col gap-y-8 items-center">
        <Header />
        <TodoList />
      </div>
    </div>
  )
}

export default App
