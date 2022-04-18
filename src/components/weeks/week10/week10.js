import "../week.scss";
import FirstPlaylistParams from "../../../assets/dev-work/first_playlist_parameters.PNG";
import FirstPlaylistSpotify from "../../../assets/dev-work/first_playlist_creation.PNG";

function Week10() {
  return (
    <div className="weekContentWrapper">
      <div className="content">
        <h1 className="title">
          4/18/22 | Week 10 | First Created Playlist and Test Run!
        </h1>

        <p>
          This was an exciting week because I got to actually generate my first
          playlist and test it out going on a run!
        </p>

        <div className="section">
          <h3>Takeaways from my First Test</h3>
          <p>
            All in all, it was a really succesful test! Running to the beat of
            the song helped me run a faster mile than I have in a while. It also
            helped me focus on my pace rather than focus on being tired/winded.
            However, there were a few things that I learned that I'll need to
            consider. Firstly, I need to randomize the songs that I'm selecting!
            Otherwise, everytime you want a hip hop playlist at 150bpm, you'll
            get the same songs. I also need to play around with the buffer I
            provide for BPM. Right now I accept anything withing +-10bpm, but
            maybe that needs to be larger/shorter. I can also look into
            accepting songs 2x as fast or 1/2 as fast to get more BPM options.
          </p>

            <h2 className="green">First Playlist Parameters</h2>
          <img
            src={FirstPlaylistParams}
            alt="Functional version of the website creation UI"
          ></img>
        </div>

        <div className="section">
          <h2 className="green">First Playlist in Spotify</h2>
          <img src={FirstPlaylistSpotify} alt="Spotify playlist UI"></img>
        </div>
      </div>
    </div>
  );
}

export default Week10;
