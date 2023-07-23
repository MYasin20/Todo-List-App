import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoInputs from "./TodoInputs";
import TodoLists from "./TodoLists";

const TodoBody = () => {
  const [updateTodo, setUpdateTodo] = useState({});
  const [todoList, setTodoList] = useState([]);

  const createTodo = (todo) => {
    setTodoList((prevVal) => {
      return [...prevVal, { todo, id: uuidv4(), active: true, completed: false }];
    })
  }
  const clearCompletedTodo = () => {
    return setTodoList(todoList.filter(todo => !todo.completed))
  }
  const deleteTodo = (id) => {
    setUpdateTodo({});
    setTodoList(prevVal => {
      return prevVal.filter((list) => {
        return list.id !== id;
      })
    })
  }
  const updatedTodo = (newTodo) => {
    const newUpdatedTodo = { ...updateTodo, todo: newTodo };
    console.log(newUpdatedTodo, 'updateTodo');
    const findIndexTodo = todoList.findIndex(list => list.id === newUpdatedTodo.id);
    const todoListCopy = [...todoList];
    todoListCopy.splice(findIndexTodo, 1, newUpdatedTodo);
    setTodoList(todoListCopy);
    setUpdateTodo({});
  }

  const handleEditTodo = (todoObj) => {
    setUpdateTodo({ ...todoObj });
  }

  const updateCompleteTodo = (todoObj) => {
    setTodoList(prevVal => {
      return prevVal.map(todo => {
        if (todo.id === todoObj.id) {
          return { ...todo, completed: !todo.completed, active: !todo.active };
        } else {
          return todo;
        }
      })
    })
  }

  return (
    <div className="absolute inset-6 top-12 max-w-[540px] mx-auto">
      <TodoInputs
        toUpdateTodo={updateTodo}
        onCreateTodo={createTodo}
        onUpdatedTodo={updatedTodo}
      />

      <TodoLists
        lists={todoList}
        clearTodo={clearCompletedTodo}
        deleteTodo={deleteTodo}
        editTodo={handleEditTodo}
        isCompleted={updateCompleteTodo}
      />
    </div>
  )
}

export default TodoBody;