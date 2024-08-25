import React, { useState } from "react";
import "./TodoSearch.css";

const TodoSearch = () => {
  const [todoInput, setTodoInput] = useState<string>("");
  const [listArray, setListArray] = useState<string[]>([]);

  const handleSubmitTodo = (event: React.FormEvent) => {
    event.preventDefault();
    setListArray((prev) => [...prev, todoInput]);
    setTodoInput("");
    };
    

    const handleRemoveTodo = (index:number) => {
        setListArray((prev)=>prev.filter((ele,ind)=>ind!==index));
    }

  return (
    <div className="m-10 flex justify-center flex-col items-center gap-10">
      <form onSubmit={handleSubmitTodo}>
        <input
          type="text"
          placeholder="Enter the todo items"
          className="bg-transparent font-semibold text-white outline-none p-2 border-2 w-96 rounded-md"
          value={todoInput}
          onChange={(event) => setTodoInput(event.target.value)}
        />
        <button type="submit" className="bg-red-600 px-5 py-2 rounded-md">
          Add
        </button>
          </form>
          
          {/* this section is the list of todo is displayed */}
      <div className="flex flex-col gap-5">
        {listArray.map((listElement, index) => (
          <div className="flex items-center gap-4" key={index}>
            <input type="checkbox" name="todo-list" className="list-items" />
            <label htmlFor="list-items">{listElement}</label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-x"
                    onClick={()=>handleRemoveTodo(index)}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10l4 4m0 -4l-4 4" />
              <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoSearch;
