// import image1 from './assets/1.jpg';
// import Lesson02 from './lessons/Lesson02/Lesson02.jsx';
// import Homework02 from './homeworks/homework02/Homework02.jsx';
// import Lesson03 from './lessons/Lesson03/Lesson03.jsx';
// import Homework03 from './homeworks/homework03/homework03.jsx';
import Lesson04 from './lessons/Lesson04/Lesson04.jsx';
import Homework04 from './homeworks/homeworks04/Homework04.jsx';

function App() {
  return (
    <div className="App">
      <Homework04 />
      <Lesson04 />
      {/* <Homework03 /> */}
      {/* <p>Der Shop</p>
      <div className="gallery">
        <Lesson03 />
        <Lesson02 /> 
        <img src={image1} alt="Shop" className="img-link" onClick={openShop} />
      </div>
      <Homework02 /> */}
    </div>
  );
}

export default App;