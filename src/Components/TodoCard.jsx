import { useRef, useState } from "react"
import { todosActions } from "../../features/todoSlice";
import { useDispatch } from "react-redux";
export default function TodoCard({ todo }) {
    const dispatch=useDispatch()
    const titleInputRef = useRef(null)
    const [newTitle, setNewTitle] = useState(todo.title);

    return (
        <div
            className={`w-full flex px-4 justify-between py-3 ${todo.completed ? 'bg-blue-200' : 'bg-purple-300'} rounded-md`}
        >
            <div className="w-[70%] flex gap-x-2 items-center">
                <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={todo.completed}
                    onChange={() => {
                        dispatch(todosActions.toggleCompleteStatus(todo.id))
                    }}
                    disabled={todo.isEditable}
                />
                <input
                    type="text"
                    name=""
                    id=""
                    ref={titleInputRef}
                    className={`outline-none bg-transparent rounded-md px-1 ${todo.completed ? 'line-through' : ''} 
                        ${todo.isEditable ? 'border-[1px] border-black' : ''}`}
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    readOnly={!todo.isEditable}
                />
            </div>
            <div className="flex gap-x-2">
                <button
                    className={`bg-white w-8 aspect-square flex justify-center items-center rounded-lg ${todo.completed ? 'opacity-50' : ''}`}
                    disabled={todo.completed}
                    onClick={() => {
                        if (todo.isEditable) {
                            if (newTitle !== ''){
                                dispatch(todosActions.updateTodo({
                                    id:todo.id,
                                    updatedTodo:{...todo,title:newTitle}
                                }))
                                dispatch(todosActions.toggleEditableStatus(todo.id))
                            }
                        }
                        else {
                            dispatch(todosActions.toggleEditableStatus(todo.id))
                            titleInputRef.current.focus()
                        }
                    }}
                >
                    {todo.isEditable ? '📁' : '✏️'}
                </button>
                <button
                    className="bg-white w-8 aspect-square flex justify-center items-center rounded-lg"
                    onClick={() => dispatch(todosActions.deteteTodo(todo.id))}
                >
                    ❌
                </button>
            </div>
        </div>
    )
}