import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context/todocontext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos,setTodo] = useState([])

  const addtodo = (todo) => {
    setTodo((prev)=> [{id:Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id,todo) => {
    setTodo((prev) => prev.map((prevTodo)=> (
      prevTodo.id === todo.id ? todo : prevTodo
    )))
  }

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((prevTodo)=> prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodo((prev) => 
      prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo,completed:!prevTodo.completed}:prevTodo)
    )
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0)
      setTodo(todos)
  },[])

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,addtodo,updateTodo,deleteTodo,toggleComplete}}>
      <h1 className='mx-auto max-w-xl text-center text-white mt-10 text-3xl font-bold font-mono'>Make Your ToDos</h1>
      <div className='mx-auto max-w-xl mt-10'>
        <TodoForm/>
      </div>
      {
        todos.map((todo) => (
          <div key={todo.id} className='mx-auto max-w-xl mt-4'>
            <TodoItem todo={todo} />
          </div>
        ))
      }
    
    </TodoProvider>

  )
}

export default App
