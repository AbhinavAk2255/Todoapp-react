import {createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "todo messsage",
            completed : false,
        }
    ],
    addtodo: (todo) => {},
    updateTodo:(id,todo) => {},
    deleteTodo:(id) => {},
    toggleComplete: (completed) => {},
});

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider