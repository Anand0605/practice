import React from 'react'
import { useState } from 'react'
import InputTodo from './components/InputTodo'
import './App.css'
import TodoList from './components/TodoList'

const App = () => {
  const [todoList, setTodoList] = useState([])

  const handleToggle =(itemId)=>{
    const newTodoList = todoList.map((listItem)=>{
        if(listItem.id === itemId){
            return {...listItem, done:!listItem.done}
        }
        return listItem;
    })
    setTodoList(newTodoList)

}

const handleDelete = (itemId)=>{
const newTodoList = todoList.filter((listItem)=> listItem.id !== itemId)
setTodoList(newTodoList)
}


  return (
    <>
    <InputTodo todoList={todoList} setTodoList={setTodoList}/>
    <TodoList todoList={todoList} handleToggle={handleToggle} handleDelete={handleDelete}/>
    </>
  )
}

export default App