import profilePic from './assets/the-goddess-iris-in-greek-mythology.jpg'

function Card() {
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Talha İris</h2>
            <p className="card-text">I struggle with coding.</p>
        </div>
    );
}

export default Card