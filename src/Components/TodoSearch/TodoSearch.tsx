import React, { useState } from "react";
import "./TodoSearch.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { type TodoType } from "../../Types/utils";
import TodoList from "../TodoList/TodoList";
import Banner from "../Banner/Banner";

const TodoSearch = () => {
  const [todoInput, setTodoInput] = useState<string>("");
  const [listArray, setListArray] = useState<TodoType[]>([]);

  const handleSubmitTodo = (event: React.FormEvent) => {
    event.preventDefault();

    if (todoInput.trim() !== "") {
      setListArray((prev) => [
        ...prev,
        { id: Date.now().toString(), content: todoInput },
      ]);
      setTodoInput("");
    }
  };

  return (
    <>
      <Banner count={listArray.length} />
      <div className="m-10 flex justify-center flex-col items-center gap-10">
        <form onSubmit={handleSubmitTodo}>
          <Input
            type="text"
            todoInput={todoInput}
            setTodoInput={setTodoInput}
          />
          <Button type="submit" className="py-2 px-6 rounded-md bg-red-600">
            Add
          </Button>
        </form>

        {/* this section is the list of todo is displayed */}
        <div className="flex flex-col gap-5 ">
          <TodoList listArray={listArray} setListArray={setListArray} />
        </div>
      </div>
    </>
  );
};

export default TodoSearch;
