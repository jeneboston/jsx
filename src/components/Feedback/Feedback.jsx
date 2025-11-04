import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";

function Feedback() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const onLikeClick = () => setLikes(prev => prev + 1);
  const onDislikeClick = () => setDislikes(prev => prev + 1);
  const onResetClick = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="feedback-wrapper">
      <h1>Feedback</h1>
      <div className="feedback-controls">
        <div className="feedback-item">
          <span>{likes}</span>
          <Button name="Like" onClick={onLikeClick} />
        </div>
        <div className="feedback-item">
          <Button name="Dislike" onClick={onDislikeClick} />
          <span>{dislikes}</span>
        </div>
      </div>
      <Button name="Reset Results" onClick={onResetClick} />
    </div>
  );
}

export default Feedback;