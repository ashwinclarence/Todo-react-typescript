import React, { useState } from "react";
import "./TodoSearch.css";

type TodoType = {
  id: string;
  content: string;
  isComplete: boolean;
};

const TodoSearch = () => {
  const [todoInput, setTodoInput] = useState<string>("");
  const [listArray, setListArray] = useState<TodoType[]>([]);

  const handleSubmitTodo = (event: React.FormEvent) => {
      event.preventDefault();
      
      if (todoInput.trim() !== '') {
          
          setListArray((prev) => [
              ...prev,
              { id: Date.now().toString(), content: todoInput, isComplete: false },
            ]);
            setTodoInput("");
        }
  };

  const handleRemoveTodo = (id: string) => {
    setListArray((prev) => prev.filter((ele) => ele.id !== id));
    };
    

    // function to complete the todo
    const handleCompleteTodo = (id: string) => {
        setListArray((prev) => (
            prev.map((items) => items.id===id?{...items,isComplete:!items.isComplete}:items)
        ))
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
        {listArray.map((listElement,index) => (
          <div className="flex items-center justify-between w-[20vw]" key={listElement.id}>
                <div className="flex items-center gap-2">
                    <h2>{index+1}:</h2>
              {/* <input type="checkbox" name="todo-list" className="list-items me-3" onChange={()=>handleCompleteTodo(listElement.id)} /> */}
              <label htmlFor="list-items">{listElement.content}</label>
            </div>
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-x text-red-600"
              onClick={() => handleRemoveTodo(listElement.id)}
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
