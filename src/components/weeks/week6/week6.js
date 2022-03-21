import "../week.scss";
import PlaylistGet from "../../../assets/dev-work/successful-playlist-get-request-crop.png";
import TracksGet from "../../../assets/dev-work/getTracksSuccess.PNG";
import PlaylistGraphV1 from "../../../assets/dev-work/playlist-duration-graph.PNG";
import PlaylistGraphV2 from "../../../assets/dev-work/refined-playlist-ui.PNG";
import { CopyBlock, dracula } from "react-code-blocks";

function Week6() {
  const code = `
  // When graphData updates, re-render the line chart
  useEffect(() => {
    const graph = (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={100}
          height={100}
          data={graphData}
          margin={{
            top: 10,
            right: 30,
            left: 30,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            className="label"
            dataKey="TotalDuration"
            // label={{ value: "Total Time in MS" }}
          />
          <YAxis
            className="label"
            // label={{ value: "BPM", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          {/* <Legend content={<CustomizedLegend external={external} />} /> */}
          <Line
            type="monotone"
            dataKey="TotalDuration"
            stroke="#C099DF"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="Duration"
            stroke="#1ED760"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );

    setGraphHTML(graph);
  }, [graphData]);

  // Once we get tracks, we also need to get the BPM of each track. Maybe do the graph first??
  async function getTracks(playlist) {
    console.log("Playlist selected", playlist);

    // Extract the URL of the tracks GET request from this playlist
    const url = playlist?.tracks?.href;
    // Make API call to get tracks of this current playlist
    const tracks = await apiCall("GET", "", url);
    // Populate the graph data from the current playlist
    let data = [];
    // If we got data back, populate the array
    if (tracks) {
      // Track cumulative playlist time
      let totalTime = 0;
      // Iterate through all tracks and extract relevant data to be graphed
      for (let trackObj of tracks) {
        let msTime = trackObj?.track?.duration_ms;
        totalTime += msTime;
        // Convert duration to minutes and seconds from ms
        let durationString =
          "{Math.floor(msTime / 1000 / 60)}" +
          " minutes " +
          "{Math.floor(msTime / 1000) % 60}" +
          " seconds";

        // Create the data object for the graph
        let newTrack = {
          name: trackObj?.track?.name,
          FormattedDuration: durationString,
          Duration: msTime,
          TotalDuration: totalTime,
        };

        // Update our graph data with the new track info
        data.push(newTrack);
      }

      console.log("New track data for graph", data);

      // Update the graph data everytime we click on a new playlist
      setGraphData(data);

      // Update the current active playlist so we can display more data on it
      setActivePlaylist(playlist);
    }
  }`;

  const playlistDisplayCode = `<div className="playlistGallery">
  {/* Dynamically map all the playlists we get from the API to image cards */}
  {playlists.map((playlist) => (
    <img
      onClick={() => getTracks(playlist)}
      src={playlist?.images[0]?.url}
      alt="Playlist cover art"
      key={playlist?.id}
    ></img>
  ))}
</div>`;

  return (
    <div className="weekContentWrapper">
      <div className="content">
        <h1 className="title">
          3/21/22 | Week 6 | Displaying Data! Successfully visualized spotify
          playlist data
        </h1>

        <p>
          Last week, I got the authorization working with the Spotify API. This
          week's task was to start retrieving data from the API and displaying
          it to the user. I started with some basic API calls, just getting a
          list of the user's playlists in their account. From there, I realized
          that the API calls were nested - each playlist held a reference to
          another API call to get the tracks for that playlist. Then, each track
          has another call in order to get the BPM song data, which is the final
          step.
          <br></br>
          <br></br>
          Before getting the BPM data, I decided to practice using the Spotify
          API to display data. I made a basic graph visualization using the data
          I already had from the basic API calls.
        </p>

        <h2>Getting Playlist and Track Data!</h2>
        <p>The first step was to just get the playlist and track data.</p>
        <img
          src={PlaylistGet}
          alt="Proof of my authentication workflow functioning"
        ></img>
        <p>
          JSON response from the Spotify API containing the track data of a
          specific playlist
        </p>
        <img
          src={TracksGet}
          alt="JSON response from the Spotify API containing the track data of a specific playlist"
        ></img>

        <h2>Visualizing the Data!</h2>
        <p>
          Now that we had access to the data, I just needed to visualize it! The
          playlists all returned references to images, so it was easy enough to
          display them in a grid.
        </p>
        <CopyBlock text={playlistDisplayCode} language="html" theme={dracula} />

        <div className="section">
          <h2>Creating the graph!</h2>
          <p>
            I used a nice graph library called ReCharts. This let me set up the
            graph super easily and allowed me to customize it as I needed to.
          </p>
          <img
            src={PlaylistGraphV1}
            alt="First version of the playlist graph visualization"
          ></img>

          <p>
            After getting a basic version working, I started to customize the
            graph a bit more to make it look nicer
          </p>
          <img
            src={PlaylistGraphV2}
            alt="Final version of the playlist graph visualization"
          ></img>

          <p>
            Here's a code snippet detailing how I get the data and re-render the
            graph everytime we select a new playlist.
          </p>
          <CopyBlock text={code} language="js" theme={dracula} />
        </div>
        <br></br>
        <br></br>

        <h2 className="green">Reading Response</h2>
        <p>Do The Work "Now We're Rolling" Response</p>
        <a
          href="https://docs.google.com/document/d/12h7GD430C-6vBLC6IPX2AH9Yo-3y_TY19pgfFCJPlVQ/edit?usp=sharing"
          className="green"
        >
          Here is a link to the google doc
        </a>
      </div>
    </div>
  );
}

export default Week6;
