import React from 'react'


export const Todolist = ({todo,onDelete}) => {
    let todolist ={
       color:"black",
       
    }
    let titlestyle = {
        color:"black",
    }
    let descstyle = {
        color:"black",
    }
    return (
        <>
        <div className="container py-3" style={todolist}>
           <h4 style={titlestyle}>{todo.title}</h4>
           <p style={descstyle}>{todo.desc}</p>
           <button className="btn btn-danger btn-sm" onClick= {()=>{onDelete(todo)}} >Delete</button>
        </div>
        </>
    )
}
