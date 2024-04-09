interface TitleProps {
  children: React.ReactNode;
  color?: string;
}

const Title: React.FC<TitleProps> = ({ children, color }) => {
  const colors: { [key: string]: string } = {
    red: "text-red-500",
    green: "text-green-500",
    blue: "text-blue-500",
    yellow: "text-yellow-500",
  };
  return (
    <h1 className={`text-2xl font-bold p-2 ${color ? colors[color] : ""}`}>
      {children}
    </h1>
  );
};

export default Title;
