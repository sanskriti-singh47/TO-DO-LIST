
import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");

    const submit = (e)=>{
      e.preventDefault();
      if(!title||!desc){
        alert("Title or Description cannot be blank!!");
      }
      else{
        addTodo(title,desc);
        setTitle("");
        setDesc("");
        }
    }

    return (
      <>
    <div className="container my-3">
        <h2 className="text-center">Add Todos</h2>
    <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Todo Title</label>
          <input type="text" value={title} className="form-control" id="title" onChange={(e)=>{setTitle(e.target.value)}}/>
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Todo Description</label>
          <input type="text" value={desc} className="form-control" id="desc" onChange={(e)=>{setDesc(e.target.value)}}/>
        </div>
        <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
    </form>
    </div>
    </>
    )
}
