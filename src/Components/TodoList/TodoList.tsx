import Button from "../Button/Button";
import "./TodoList.css";
import { TodoType } from "../../Types/utils";
import { ReactSetState } from "../../Types/utils";
type TodoList = {
  listArray: TodoType[];
  setListArray: ReactSetState<TodoType[]>;
};

const TodoList = ({ listArray, setListArray }: TodoList) => {
  const handleRemoveTodo = (id: string) => {
    setListArray((prev) => prev.filter((ele) => ele.id !== id));
  };
  return listArray.map((listElement) => (
    <div
      className="flex items-center justify-between w-[30vw] border-b border-b-gray-500 border-opacity-50 pb-4"
      key={listElement.id}
    >
      <div className="flex gap-2">
        <label htmlFor="list-items">{listElement.content}</label>
      </div>
      <Button type="button" onClick={() => handleRemoveTodo(listElement.id)}>
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
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 10l4 4m0 -4l-4 4" />
          <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
        </svg>
      </Button>
    </div>
  ));
};

export default TodoList;
