import "../week.scss";
import AuthSuccess from "../../../assets/dev-work/auth_success.PNG";
import SpotifyAuth from "../../../assets/dev-work/spotify-server-auth-proof.png";
import PlaylistGet from "../../../assets/dev-work/successful-playlist-get-request-crop.png";
import { CopyBlock, dracula } from "react-code-blocks";

function Week5() {
  const code = `
  // https://developer.spotify.com/documentation/general/guides/authorization/implicit-grant/ <- Spotify docs on implicit grant auth
  // Implicit grant authentication
  export function authenticate(e) {
    e.preventDefault(); //Forms default action is to submit when you click submit, however sometimes you want to do something with the data. Prevent default prevents the submission and allows the data to be passed through
  
    var state = generateRandomString(16);
    localStorage.setItem("client_id", client_id);
  
    // Generate/create the spotify auth url that we send the user to.
    // Once they log im through that auth site, we redirect back to our site via the redirect URI we provide
    // NOTE: That redirect URI is set in the dev portal app settings!!
    let url = AUTHORIZE;
    url += "?response_type=token";
    url += "&client_id=" + encodeURIComponent(client_id);
    url += "&scope=" + encodeURIComponent(scope);
    url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
    url += "&state=" + encodeURIComponent(state);
    window.location.href = url; // Show Spotify's authorization screen
  
    // This will redirect us to our redirect URI, so we need to set up a route that will capture that redirect and store the auth data it returns in the URL params    
  }`;

  const apiCallCode = `
  export default function apiCall(method, url) {  
    url = PLAYLISTS;
    switch (method) {
      case "GET":
        axios.get(url, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem("accessToken")
          }
        }).then((res) => {
          console.log("GET RESPONSE", res);
        });
        break;
      case "POST":
        axios.post(url);
        break;
      default:
        console.error("Illegitimate method called, valid calls are GET, POST");
        break;
    }
  }
  
  `;

  return (
    <div className="weekContentWrapper">
      <div className="content">
        <h1 className="title">
          3/7/22 | Week 5 | Authorization Granted! Interacting with the Spotify
          API
        </h1>

        <p>
          This week's goal was to succesfully interface with the Spotify API. I
          created a good framework for authenticating client side using the
          implicit grant auth workflow, as opposed to having to host auth from
          my own server side. The implicit grant worklflow grants you a token
          once you authenticate, this token expires after a certain time period,
          and during that time you use that auth code to make your api calls for
          that particular user.
          <br></br>
          <br></br>
          This week, I not only got a good auth workflow going, but I also was
          able to make and receive requests from the Spotify API! I got a list
          of user playlists that I could then parse and display. This is a super
          important step because this is the largest lift of the project so far,
          actually getting the data and working with the Spotify API. I can now
          take the data from the API calls and start to do what I set out to do
          - sort and create playlists to a specific BPM!
        </p>

        <h2>Getting Auth to Work</h2>
        <p>
          The first thing I did was rework how I handled Authentication. I
          realized after some more research that Spotify has multiple Auth
          workflows, and the one that was best for me was the implicit grant.
          This let me do all the authentication client side, as opposed to
          having to create a middleware express server and deal with all the
          CORS issues.
        </p>
        <img
          src={AuthSuccess}
          alt="Proof of my authentication workflow functioning"
        ></img>

        <h2>Out with the old...</h2>
        <p>
          Here is my old server side auth. I did this by creating my own express
          server, as a sort of middleware. This introduced a lot more complexity
          than I needed or wanted. Switching to implicit grant made things a lot
          easier.
        </p>
        <img src={SpotifyAuth} alt="Spotify authentication page I coded"></img>

        <div className="section">
          <p>
            This is a brief code snippet that shows how the new implicit grant
            workflow functions
          </p>
          <CopyBlock text={code} language="js" theme={dracula} />
          <p>
            We basically redirect the user to the spotify auth endpoint. Once
            they authenticate through there, we tell spotify to redirect our
            user back to our website, and spoitfy gives us an auth token in the
            URL parameters that we can then parse and use for future API calls
            for that user's session.
          </p>
        </div>

        <div className="section">
          <h2>First API Call!</h2>
          <p>
            I also made my first succesful API call to the Spotify API! This is
            another large step because once I actually get the data back from
            Spotify, I can start to do the exciting steps of parsing that data
            and starting to curate/create playlists for the user.
          </p>
          <img
            src={PlaylistGet}
            alt="Documentation of successful Spotify API call"
          ></img>

            <p>Here's a work in progress snippet of how that Spotify API call works</p>
          <CopyBlock text={apiCallCode} language="js" theme={dracula} />
        </div>
        <br></br>
        <br></br>

        <h2 className="green">Project Proposal & Presentation</h2>
        <p>I also did a bit of work on my project plan presentation.</p>
        <a
          href="https://docs.google.com/presentation/d/1Ya5Mqjv39bMVGezueM5yGQ8qZ65hw5LVonVM6j3H1ko/edit?usp=sharing"
          className="green"
        >
          Here is a link to the google doc
        </a>
      </div>
    </div>
  );
}

export default Week5;
