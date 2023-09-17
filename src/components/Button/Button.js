import "./Button.css";

const Button = ({
  buttonText,
  position,
  margin,
  backgroundColor,
  color,
  border,
  padding
}) => {
  return (
    <div className="button" style={{position, margin, backgroundColor, border, padding}}>
      <button className="btn" style={{color}}>
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
