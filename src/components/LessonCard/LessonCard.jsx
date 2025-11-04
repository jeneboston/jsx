import Button from "../Button/Button";
import "./styles.css";
import { lessonData } from "./data";

function LessonCard() {
    const getFullName = () => {
        return `${lessonData.nameTeacher} ${lessonData.surnameTeacher}`;    
    
    }
    return (
        <div className="lesson-card-wrapper">
            <p className="description"> {getFullName()}</p>
            <h3 className="title">Lesson {lessonData.lesson_number}: Magic Happens </h3>
            <Button />
            <p className="description">Your wishes {lessonData.topic} will be fulfilled</p>
            <img src={lessonData.imgSrc} alt="" />  
            
        </div>
        );
}

export default LessonCard;