import "./styles.css";

function Button({ name, onClick, type = "button" }) {
  return (
    <button className="button" type={type} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
