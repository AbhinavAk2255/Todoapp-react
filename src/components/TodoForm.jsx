import React, { useState } from 'react'
import { useTodo } from '../context/todocontext'


function TodoForm() {
    const [todo,setTodo] = useState("")
    const {addtodo} = useTodo()

    const add = (e) => {
        e.preventDefault()
        if (!todo) return
        addtodo({todo, completed:false})
        setTodo("")
    }
    
  return (
    <form onSubmit={add} className='flex' >
        <input type="text" placeholder='write Todo' 
        className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-2' 
        value={todo} 
        onChange={(e) => setTodo(e.target.value)} />
        <button type='submit' className='rounded-r-lg px-3 py-1
        bg-green-500 text-white shrink-0'>Add</button>
    </form>
  )
}

export default TodoForm