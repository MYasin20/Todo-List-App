/* eslint-disable react/prop-types */
import { useState } from "react";

const TodoLists = ({ lists, clearTodo, deleteTodo, editTodo, isCompleted }) => {
  const [filter, setFilter] = useState('All');
  const filteredLists = lists.filter((list) => {
    if (filter === 'All') {
      return true;
    } else if (filter === 'Active') {
      return list.active;
    } else if (filter === 'Completed') {
      return list.completed;
    }
    return true;
  });
  const handleDeleteTodo = (id) => {
    return deleteTodo(id);
  }
  const handleEditTodo = (todoSelectedObj) => {
    editTodo(todoSelectedObj);
  }
  const handleCompleteTodo = (todoObj) => {
    isCompleted(todoObj);
  }
  return (
    <>
      <ul className="w-full shadow-lg bg-white min-h-[250px] rounded-t-md">
        {filteredLists.map((list, index) => (
          <li key={list.id}
            draggable={true}
            onDragOver={console.log}
            className={`${index === 0 ? 'rounded-t-md' : ''} select-none bg-white h-14 border-b-2 cursor-pointer border-b-[#E3E4F1] text-black font-normal text-xs md:text-lg flex gap-2 items-center justify-between px-4`}>
            <div onClick={() => handleCompleteTodo(list)}
              className={`flex items-center gap-4 flex-1 line ${list.completed ? 'line-through text-[#d2d3db]' : ''}`}>
              <div className={`flex justify-center items-center rounded-full w-6 h-6 ${list.completed ? 'bg-gradient-to-br from-[#57ddff] to-[#c058f3]' : 'border-2 border-gray-300'}`}>
                {list.completed && <img src="../src/images/icon-check.svg" alt="check icon" />}
              </div>
              {list.todo}
            </div>
            <div className="flex gap-2 items-center justify-center">
              {!list.completed &&
                <div className=''>
                  <svg onClick={() => handleEditTodo(list)} xmlns="http://www.w3.org/2000/svg" width='25' height='25' viewBox="0 0 512 512"><path d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" /><path d="M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z" /></svg>
                </div>
              }
              <div className=''>
                <svg onClick={() => handleDeleteTodo(list.id)} width='18' height='18' xmlns="http://www.w3.org/2000/svg"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" /></svg>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className='bg-white shadow-lg rounded-b-md flex justify-between items-center text-xs md:text-sm text-[#9495A5] p-4'>
        <div>{filteredLists.length} items left</div>
        <div className='hidden md:flex gap-3 items-center'>
          <button
            onClick={() => setFilter('All')}
            className={`hover:text-[#494C6B] ${filter === 'All' ? 'text-blue-600' : ''}`}
            type='button'>
            All
          </button>
          <button
            onClick={() => setFilter('Active')}
            className={`hover:text-[#494C6B] ${filter === 'Active' ? 'text-blue-600' : ''}`}
            type='button'>
            Active
          </button>
          <button
            onClick={() => setFilter('Completed')}
            className={`hover:text-[#494C6B] ${filter === 'Completed' ? 'text-blue-600' : ''}`}
            type='button'>
            Completed
          </button>
        </div>
        <button
          onClick={() => clearTodo()}
          className='hover:text-[#494C6B]'
          type='button'>
          Clear Completed
        </button>
      </div>

      <div className='md:hidden mt-4 flex items-center justify-center gap-4 bg-white h-12 text-[#9495A5]'>
        <button
          onClick={() => setFilter('All')}
          className={`hover:text-[#494C6B] ${filter === 'All' ? 'text-blue-600' : ''}`}
          type='button'>
          All
        </button>
        <button
          onClick={() => setFilter('Active')}
          className={`hover:text-[#494C6B] ${filter === 'Active' ? 'text-blue-600' : ''}`}
          type='button'>
          Active
        </button>
        <button
          onClick={() => setFilter('Completed')}
          className={`hover:text-[#494C6B] ${filter === 'Completed' ? 'text-blue-600' : ''}`}
          type='button'>
          Completed
        </button>
      </div>
    </>
  )
}

export default TodoLists;