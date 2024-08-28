import { ReactSetState } from "../../Types/utils";

type Input = {
  type: "text" | "number";
  todoInput: string;
  setTodoInput: ReactSetState<string>;
};
const Input = ({ type, todoInput, setTodoInput }: Input) => {
  return (
    <input
      type={type}
      placeholder="Enter the todo items"
      className="bg-transparent font-semibold outline-none p-2 border-2 w-96 rounded-md"
      value={todoInput}
      onChange={(event) => setTodoInput(event.target.value)}
    />
  );
};

export default Input;
