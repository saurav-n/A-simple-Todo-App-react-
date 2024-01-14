import { createContext, useContext } from "react";

const TodosContext=createContext()

export const TodosContextProvider=TodosContext.Provider

export function useTodos(){
    return useContext(TodosContext)
}