import "../week.scss";
import PaceV2 from '../../../assets/Mockups/pace-v2.PNG';
import Login from '../../../assets/Mockups/login.PNG';
import PlaylistV3 from '../../../assets/Mockups/playlist-creator-v3.PNG';

function Week3() {
  return (
    <div className="weekContentWrapper">
      <div className="content">
        <h1 className="title">2/07/22 | Week 3 | Mockups, Mockups, and more Mockups!</h1>

        <p>
          The focus of this week was to really finalize the designs and get them to a place where
          I can start coding a basic MVP. I shifted to more basic sketched out wireframes, really focusing
          on what each page needed and what its purpose was. After that, I shifted back to more high fidelity
          wireframes, finalizing the pace page, playlist creation page, and the login page.
          <br></br><br></br>
          Here is a link to the <a href="https://www.figma.com/file/dFWMQksgcjy2qQ4SDljQYz/Senior-Project?node-id=0%3A1">Figma file</a>
        </p>
       

      <h3>Wireframes</h3>
      <p>Screenshots coming soon... I have them on my iPad and just need to transfer them to my PC</p>

        <h2>Login page</h2>       
        <img src={Login} alt="Login page UI"></img>

        <h2>Pace page</h2>
        <img src={PaceV2} alt="Pace page UI"></img>

        <h2>Playlist creator</h2>
        <img
          src={PlaylistV3}
          alt="Third iteration for playlist crator UI"
        ></img>
      </div>



    <h2>Next steps!</h2>
    <p>Now that I have some more solid high fidelity wireframes, the next step is to get
      an MVP working to prove that this idea actually works in code. I need to be able to
      do the following:

      <ol>
        <li>[] Authenticate with Spotify API</li>
        <li>[] Get user playlist info</li>
        <li>[] Take user input on preferred pace and sort songs that match that desired BPM</li>
        <li>[] Get x amount of songs that fit the time interval they want</li>
        <li>[] Maybe let them input distance instead of total time?</li>
      </ol>
    </p>

    </div>
  );
}

export default Week3;
