import "../week.scss";
import PlaylistDetail from "../../../assets/dev-work/display-created-playlist.PNG";

function Week12() {
  return (
    <div className="weekContentWrapper">
      <div className="content">
        <h1 className="title">
          5/2/22 | Week 12 | Showing playlists once generated
        </h1>

        <p>
          This week I wanted to make the UI for showing what was in the playlist
          after we generated it!
        </p>

        <div className="section">
          <h3>Creating the logic</h3>
          <p>
            The tricky thing with getting this to work was the asynchronous
            logic. We needed to wait until we knew the playlist was created
            (i.e. the POST response came back), then grab that playlists ID so
            we can query what tracks are in that playlist to display them!
            Luckily, the post response sent back a URL that we could call to get
            all the tracks. All we had to do was somehow let the playlist detail
            page know how to call that URL once we redirected to that page. So,
            I passed it in as a URL parameter! That way we could just parse the
            URL, call to that API endpoint, and display the tracks.
          </p>

          <h2 className="green">Playlist Detail Showcase</h2>
          <img
            src={PlaylistDetail}
            alt="Functional version of the website creation UI"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Week12;
