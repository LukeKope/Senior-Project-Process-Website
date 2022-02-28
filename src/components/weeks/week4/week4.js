import "../week.scss";
import PlaylistGenerator from "../../../assets/Mockups/playlist-generator.PNG";
import SpotifyAuth from "../../../assets/dev-work/spotify-server-auth-proof.png";
import { CopyBlock, dracula } from "react-code-blocks";

function Week4() {
  const code = `
    // Protecting environmental vars with dotenv
    require("dotenv").config();
    var cookieParser = require("cookie-parser");
    // Defining const
    const express = require("express");
    const app = express();
    const cors = require("cors");
    const port = process.env.PORT || 5000;
    const path = require("path");

    // Adding CORS here to allow for the client-side to make requests to the API without getting the Access Allow Origin missing error
    app
    .use(function (req, res, next) {        
        res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
        res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
        );
        next();
    })
    .use(cors({ origin: "*" }))
    .use(cookieParser());

    //ROUTES
    const loginAuth = require("./routes/auth.js");

    // Display some basic HTML server side for testing logins and understanding how to work with the data once received
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "/routes/public/index.html"));
    });

    // Within loginAuth, we look for our specific URLs of /login, /callback, /refresh_token
    app.use("/", loginAuth);

    app.listen(port, () => {
        console.log('Server listening on port!');
    });`;

  return (
    <div className="weekContentWrapper">
      <div className="content">
        <h1 className="title">
          2/28/22 | Week 4 | Beginning of Coding, Kanban Boards, and Finalizing
          Mockups
        </h1>

        <p>
          This week's goal was to start coding and interfacing with the Spotify
          API. I wanted to get the authentication through the Spotify API
          working, as well as a basic version of the client side login.
          <br></br>
          <br></br>
          Here is a link to the{" "}
          <a href="https://www.figma.com/file/dFWMQksgcjy2qQ4SDljQYz/Senior-Project?node-id=0%3A1">
            Figma file
          </a>
        </p>

        <h2>Mockup Finalization | Playlist Generator Page</h2>
        <p>
          The goal of this iteration of the playlist page was to make it much
          less cluttered. To do this, I decided to make the playlist maker its
          own page, whereas previously I showed the actual generated playlist on
          the same page. The idea here is to make the creation modular, allowing
          users to input different "sprints" or sections to their playlist that
          they can assign specific properties, drag around, etc. Once they do
          that, they can generate the playlist and that will take them to a
          separate screen with that playlist.
        </p>
        <img src={PlaylistGenerator} alt="Playlist Generator UI"></img>

        <h2>Coding!</h2>
        <p>
          Server side auth, creating my own express server, making client side
          talk to server. Next steps - heroku, netlify, getting those to talk
          Then can use user auth to get playlist info and go from there.
        </p>
        <img src={SpotifyAuth} alt="Spotify authentication page I coded"></img>

        <div className="section">
          <p>
            This is a brief code snippet that shows how some of the server side
            auth logic works
          </p>
          <CopyBlock text={code} language="js" theme={dracula} />
        </div>

        <h3>Project Proposal & Presentation</h3>
        <p>I also did a bit of work on my project proposal document.</p>
        <a
          href="https://docs.google.com/document/d/1YotMicFJrBB05zfsFgASn5tCPTw-WYkIPQjws_rhFmQ/edit?usp=sharing"
          className="green"
        >
          Here is a link to the google doc
        </a>

        <div className="section">
          <h2>Next steps!</h2>
          <p>
            Now that I have some more solid high fidelity wireframes, the next
            step is to get an MVP working to prove that this idea actually works
            in code. I need to be able to do the following:
          </p>
          <ol>
            <li>[x] Authenticate with Spotify API</li>
            <li>[ ] Host client side on netlfiy</li>
            <li>[ ] Host server side API on heroku</li>
            <li>[ ] Allow server and client to connect</li>
            <li>[ ] Get user playlist info</li>
            <li>
              [ ] Take user input on preferred pace and sort songs that match
              that desired BPM
            </li>
            <li>
              [ ] Get x amount of songs that fit the time interval they want
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Week4;
