import "../week.scss";
import playlistUI from "../../../assets/dev-work/playlist-UI-coded.PNG";

function Week9() {
  return (
    <div className="weekContentWrapper">
      <div className="content">
        <h1 className="title">
          4/11/22 | Week 9 | Playlist functionality continued
        </h1>

        <p>
          I am super close to having the playlist functionality finalized! I
          have the UI set up and in place, as well as the logic all mapped out
          in terms of the logic workflow.
        </p>

        <div className="section">
          <img
            src={playlistUI}
            alt="UI of the playlist portion of the website"
          ></img>
          <p>
            The general workflow is as follows... First - create the playlist.
            Then, get all the playlists that spotify has in a specific
            "category" (i.e. funk, workout, party, hip-hop, etc.) Then, I
            iterate through every playlist, getting the tracks and their IDs.
            Finally, I get an audio analysis of all the tracks, getting their
            BPM, and add all relevant tracks to the playlist I created until we
            run out of playlists or until I reach the total time I'm aiming for
            (i.e. 30 minutes)
          </p>
          <br></br>
          <br></br>
          <p>
            {" "}
            I got the buttons working and storing data, as well as the time
            calculation. I also am looking into a good way to incorporate BPM
            into this UI, either through letting the user tap the BPM or by
            rough calculation using estimates (i.e. 150 bpm is a 10 minute mile){" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Week9;
