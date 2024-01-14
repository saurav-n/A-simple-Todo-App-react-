import { useDispatch } from 'react-redux'
import { useState } from "react";
import { todosActions } from '../../features/todoSlice';
export default function TodoAddField(){
    const [todoTitle, setTodoTitle] = useState('');
    const dispatch=useDispatch()
    const onSubmitHandler=(e)=>{
        e.preventDefault()
        if(todoTitle!==''){
            dispatch(todosActions.addTodo(todoTitle))
            setTodoTitle('')
        }
    }
    return(
        <form 
            action=""
            className="w-full flex bg-slate-800 rounded-md"
            onSubmit={onSubmitHandler}
        >
            <input 
                type="text" 
                className="w-[90%] outline-none bg-transparent px-4 py-2 text-gray-400"
                placeholder="Write your Todos..."
                value={todoTitle}
                onChange={(e)=>setTodoTitle(e.target.value)}
            />
            <input 
                type="submit" 
                value="Add" 
                className="w-[10%] outline-none bg-green-500 px-1 py-2 rounded-r-md text-white"
            />
        </form>
    )
}