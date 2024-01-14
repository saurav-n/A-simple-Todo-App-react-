import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

export default function TodoList(){
    const todos=useSelector(state=>state.todos)
    return(
        <div className="w-full flex flex-col gap-y-2">
            {todos.map(todo=><TodoCard key={todo.id} todo={todo}/>)}
        </div>
    )
}