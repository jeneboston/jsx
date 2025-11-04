import './styles.css';
import avatar1 from '../../assets/3.jpg';
import avatar2 from '../../assets/2.jpg';
import avatar3 from '../../assets/4.jpg';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

function Homework02() {
  return (
    <div className="team-section">
      <h1 className="team-title">Gross Team</h1>
      <div className="team-grid">
        <ProfileCard 
          name="Jene" surname="Boston" 
          profession="Frontend Developer" 
          hobby="Resting" avatar={avatar1} 
        />
        <ProfileCard 
          name="Jane" surname="Zoe" 
          profession="Backend Developer" 
          hobby="Cooking" avatar={avatar2} 
        />
        <ProfileCard 
          name="Ekaterina" surname="Zavertyaeva" 
          profession="FullStack Developer" 
          hobby="Reading" avatar={avatar3}
       />
      </div>
    </div>
  );
}

export default Homework02;