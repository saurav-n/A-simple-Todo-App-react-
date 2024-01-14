import { createSlice,nanoid } from '@reduxjs/toolkit'

const initialState={
    todos:localStorage.getItem('todos')?JSON.parse(localStorage.getItem('todos')):[]
}
const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            console.log('adding todo')
            const newTodo={
                id:nanoid(),
                title:action.payload,
                completed:false,
                isEditable:false
            }
            state.todos.push(newTodo)
            localStorage.setItem('todos',JSON.stringify(state.todos))
        },
        deteteTodo:(state,action)=>{
            state.todos=state.todos.filter(todo=>todo.id!==action.payload)
            localStorage.setItem('todos',JSON.stringify(state.todos))

        },
        updateTodo:(state,action)=>{
            state.todos=state.todos.map(todo=>todo.id===action.payload.id?action.payload.updatedTodo:todo)
            localStorage.setItem('todos',JSON.stringify(state.todos))

        },
        toggleCompleteStatus:(state,action)=>{
            state.todos=state.todos.map(todo=>todo.id===action.payload?{...todo,completed:!todo.completed}:todo)
            localStorage.setItem('todos',JSON.stringify(state.todos))

        },
        toggleEditableStatus:(state,action)=>{
            state.todos=state.todos.map(todo=>todo.id===action.payload?{...todo,isEditable:!todo.isEditable}:todo)
            localStorage.setItem('todos',JSON.stringify(state.todos))

        }
    }
})

export const {actions:todosActions,reducer:todosReducer}=todoSlice