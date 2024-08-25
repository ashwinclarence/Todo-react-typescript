import "./TodoList.css";

const TodoList = () => {
  return (
    <div className="w-auto flex items-center flex-col mt-6">
      <div className="flex items-center gap-4 ">
        <input type="radio" className="list-items"  />
        <label htmlFor="list-items">this is a list item</label>
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className ="icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10l4 4m0 -4l-4 4" /><path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" /></svg>
      </div>
    </div>
  );
};

export default TodoList;
