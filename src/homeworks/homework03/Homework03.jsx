// src/homeworks/homework03/Homework03.jsx
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./styles.css";

function Homework03() {
  return (
    <div className="homework03-wrapper">
      <h1>Email</h1>
      <Input placeholder="Enter your email" type="email" />
      <Button2 name="Send email" type="submit" />
    </div>
  );
}

export default Homework03;