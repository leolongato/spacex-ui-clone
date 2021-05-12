interface Props {
  title: string;
  color: string;
}

const Button: React.FC<Props> = ({ title, color }) => {
  return (
    <div className={color === "black" ? "container" : "container-white"}>
      <div
        className={
          color === "black" ? "container-hover" : "container-hover-white"
        }
      ></div>
      <span
        className={color === "black" ? "button-title" : "button-title-white"}
      >
        {title}
      </span>
    </div>
  );
};

export default Button;
