import React,{Fragment} from "react"
import { useState } from "react";
function App() {
   useEffect (() => {
     fetch("https://sum-server.100xdevs.com/todos")
     .then (async(res)=>{
      const json=await res.json();
      setTodos(json.todos);
     })
   },[])

   return <div>
    
     {todos.map(todo=> <Todo title={todo.title} description={todo.description}></Todo>)}
   </div>
}
function Todo({title,description}){
  <div>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
}
export default App