
import './App.css';
import Header from './Mycomponents/Header'; 
import {Footer} from './Mycomponents/Footer';
import {Todos} from './Mycomponents/Todos';
import {AddTodo} from './Mycomponents/AddTodo';
import React, { useState ,useEffect}from 'react';
import {About} from './Mycomponents/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) =>{
    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(todos.filter(
      (e)=>{
        return e !== todo;
      }));
      localStorage.setItem("todos",JSON.stringify(todos));
  }
  const addTodo=(title,desc)=>{
    let Sno;
    if(todos.length === 0){
      Sno = 1;
    }
    else{
     Sno =todos[todos.length-1].Sno +1;
    }
    const myTodo = {
      Sno : Sno, 
      title : title,
      desc : desc,
    }
    setTodos([...todos,myTodo]);
  } 

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  return (
  <>
  <Router>
    <Header title="My Todos List" searchBar="false" />
    <Switch>
        <Route exact path="/" render={()=>{
          return(
            <>
             <AddTodo addTodo={addTodo}/>
             <Todos todos={todos} onDelete={onDelete}/>
            </>
          )
        }}>
        </Route>
        <Route exact path="/about">
            <About />
        </Route>
          
    </Switch>  
    <Footer/>
  </Router>
  </>
  );
}

export default App;
