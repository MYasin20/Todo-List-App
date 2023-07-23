/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";


const TodoInputs = ({ onCreateTodo, toUpdateTodo, onUpdatedTodo }) => {
  const [editTodo, setEditTodo] = useState('');
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    if (Object.keys(toUpdateTodo).length) {
      setEditTodo(toUpdateTodo.todo);
      setEdit(true);
    } else {
      setEditTodo('');
      setEdit(false);
    }
  }, [toUpdateTodo]);

  const handleCreateTodo = (evt) => {
    const value = evt.target.value;
    if (evt.which === 13 && value) {
      onCreateTodo(value);
      evt.target.value = '';
    }
  }
  const handleUpdatedTodo = (evt) => {
    const newTodoValue = evt.target.value;
    if (evt.which === 13 && newTodoValue) {
      onUpdatedTodo(newTodoValue);
      setEditTodo('');
      evt.target.value = '';
    }
  }

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-4xl tracking-[1rem] font-bold text-white">TODO</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fillRule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z" /></svg>
      </div>
      <div>
        {edit ?
          <input
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            onKeyUp={handleUpdatedTodo}
            className="w-full h-10 rounded-md pl-4 mb-4 mt-10 outline-none text-xs md:text-lg"
            type="text"
            placeholder="Update todo..." />
          :
          <input
            onKeyUp={handleCreateTodo}
            className="w-full h-10 rounded-md pl-4 mb-4 mt-10 outline-none text-xs md:text-lg"
            type="text"
            placeholder="Create a new todo..." />
        }
      </div>
    </>
  )
}

export default TodoInputs