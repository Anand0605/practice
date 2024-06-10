import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const InputTodo = ({ todoList, setTodoList }) => {
    const [inputBox, setInputBox] = useState('')

    //    console.log('inputBox', inputBox)

    const addItem = () => {
        if(!inputBox){
            return alert("please add item")
        }
        const newTodoItem = {
            id: uuidv4(),
            item: inputBox,
            done: false
        }
        setTodoList([newTodoItem, ...todoList])
        setInputBox('')
        
    }
    // console.log("todoList", todoList)

   

    return (
        <>
            <div className='header'>
                <h2>TO DO LIST</h2>
            </div>
            <div className="input-box">
                <input
                    type="text"
                    placeholder='add todo'
                    value={inputBox}
                    onChange={(e) => { setInputBox(e.target.value) }}
                />
                <button className='btn' onClick={addItem}>+</button>

            </div>
        </>
    )
}

export default InputTodo