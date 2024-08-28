type Button = {
  type: "submit" | "button";
  children: JSX.Element | string;
    onClick?: () => void;
    className?: string;
};



const Button = ({ type, children, onClick,className }: Button) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
