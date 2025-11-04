import './styles.css';

function ProfileCard({name, surname, profession, hobby, avatar}) {
    return (
        <div className="profile-card">
            <img src={avatar} alt="Avatar" className="profile-avatar" />
            <h2 className="profile-name">{name} {surname}</h2>
            <p className="profile-profession">{profession}</p>
            <p className="profile-hobby">Hobby: {hobby}</p>
        </div>
    );
}

export default ProfileCard;