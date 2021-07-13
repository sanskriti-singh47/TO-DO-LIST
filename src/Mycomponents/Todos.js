import React from 'react'
import { Todolist } from './Todolists'

export const Todos = (props) => {
    let myStyle={
        minHeigth:"100vh",
    }
    return (
        <>
        <div className="container" style={myStyle}>
            <h2 className="text-center my-3 mx-2">Todos List</h2>
            {props.todos.length===0? "No todos to Display!!!!":
            props.todos.map((todo)=>{
                return (
                    <Todolist todo={todo} key={todo.Sno} onDelete={props.onDelete}/>
                    )    }
            
            )}
         <hr/>  
        </div>
        </>
    )
}
