interface ButtonProps {
  color: string;
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ color, onClick, children }) => {
  const colors: { [key: string]: string } = {
    primary: "bg-blue-700",
    secondary: "bg-red-700",
    tertiary: "bg-green-700",
  };
  return (
    <button
      className={`${colors[color]} text-white p-2 rounded-md mt-4 hover:bg-opacity-80`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
