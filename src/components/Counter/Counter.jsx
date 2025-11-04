import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";

function Counter() {
    const [count, setCount] = useState(0);
    console.log(count);

    const onMinusClick = () => {
        setCount((prevCount) => prevCount - 1);
    };

    const onPlusClick = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div className="counter-wrapper">
            <div className="button-wrapper">
                <Button name="-" onClick={onMinusClick} />
            </div>
            <div className="result-container">{count}</div>
            <div className="button-wrapper">
                <Button name="+" onClick={onPlusClick} />
            </div>
        </div>
    );
}

export default Counter;