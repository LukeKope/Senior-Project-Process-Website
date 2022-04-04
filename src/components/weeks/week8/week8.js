import "../week.scss";

function Week8() {
  return (
    <div className="weekContentWrapper">
      <div className="content">
        <h1 className="title">4/4/22 | Week 8 | Playlist functionality</h1>

        <p>
          This week's focus was on getting the playlist functionality working.
          Unfortunately, I did not have as much time to work on it this week, so
          the functionality is still W.I.P.
        </p>

        <div className="section">
          <h3>Things to consider | Midterm Feedback</h3>
          <p>I got lots of great feedback from the midterm presentation. Some things I need to consider...</p>
          <ul className="green">
            <li>Consider other factors apart from BPM in creating running playlist, maybe energy of the song is also a factor!</li>
            <li>Test the idea! Manually create a playlist of a certain BPM and see if it works/what other factors you might want.</li>
            <li>Try using Track in the name (run on a track, track as in music, good word play)</li>
            <li>Play around with how people select the BPM/cadence, maybe people can tap how fast they want to run.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Week8;
