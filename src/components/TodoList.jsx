import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';

const TodoList = ({ todoList, handleToggle,handleDelete }) => {
    return (
        <>
            <div className='list'>
                <ul className='ul-list'>
                    {
                        todoList.map((listItem) => (
                            <li className='li-list' key={listItem.id} style={{backgroundColor:listItem.done ? "red" : ""}}>
                                <h3>{listItem.item}</h3>
                                <span className='action'>
                                    {
                                        listItem.done ? <CancelIcon onClick={() => handleToggle(listItem.id)}/> :<CheckCircleOutlineIcon className='check' onClick={() => handleToggle(listItem.id)} />
                                    }
                                    
                                    <DeleteIcon onClick={() => handleDelete(listItem.id)} />
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default TodoList