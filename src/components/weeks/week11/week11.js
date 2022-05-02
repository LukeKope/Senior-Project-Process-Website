import "../week.scss";
import NavImage from "../../../assets/dev-work/nav-bar.PNG";
import FirstPlaylistSpotify from "../../../assets/dev-work/first_playlist_creation.PNG";

function Week11() {
  return (
    <div className="weekContentWrapper">
      <div className="content">
        <h1 className="title">4/25/22 | Week 11 | Adding navigation</h1>

        <p>
          This week I wanted to polish a few things about my website. Firstly, I
          wanted to add in some navigation to make this feel more functional.
        </p>

        <div className="section">
          <h3 className="green">Adding a navbar</h3>
          <p>
            The important detail with this was having to ensure we could only
            navigate to specific options when the user is authenticated.
          </p>

          <img src={NavImage} alt="NavBar UI"></img>
        </div>
      </div>
    </div>
  );
}

export default Week11;
