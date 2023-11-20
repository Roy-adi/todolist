import { createContext , useContext, useState } from "react";


export const TodoContext = createContext({
   todos:[ {
    id: 1,
    todo: "Initial Todo",
    completed: false,
  }],
   addTodos : (todo)=>{},
   updatedTodo : (todo ,id)=>{},
   deleteTodo : (id)=>{},
   toggleComplete:(id)=>{}
})

export const UseTodo = ()=> useContext(TodoContext)

const AppContext = ({children})=>{

    const [todos, setTodos] = useState([]);

   const addTodos = (todo) => {
    // Assuming you want to set the initial completed value to false
    const newTodo = {
      id: Date.now(),
      completed: false, // Set a default value
      ...todo,
    };
  
    setTodos((prev) => [newTodo, ...prev]);
  };

   const updatedTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

    return(
        <TodoContext.Provider value={{todos ,addTodos,updatedTodo,deleteTodo,toggleComplete}} >
         {children}
        </TodoContext.Provider>
    )
}

export default AppContext;