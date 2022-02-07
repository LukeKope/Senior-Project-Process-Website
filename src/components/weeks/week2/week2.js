import "../week.scss";
import Moodboard from "../../../assets/Mockups/moodboard.PNG";
import PaceInspiration from "../../../assets/Mockups/pace-inspiration.PNG";
import Pace from "../../../assets/Mockups/Pace.PNG";
import PlaylistCreator from "../../../assets/Mockups/playlist-creator-v1.PNG";
import PlaylistCreatorv2 from "../../../assets/Mockups/playlist-v2.PNG";
import SpotifyAcct from "../../../assets/spotify-dev-account.PNG";

function Week2() {
  return (
    <div className="weekContentWrapper">
      <div className="content">
        <h1 className="title">1/31/22 | Week 2 | Ideation</h1>

        <p className="green">
          This weeks focus was to take the my idea and start to flesh it out.
          What will this project look like? What features are core to it
          working? What makes it useful, how will users interact with it, what
          tech stack can I use to best get me there?
        </p>

        <div className="section">
          <h2>This week's deliverables</h2>
          <ol>
            <li>
              [x] Read 1st “Middle” chapter to “Now We’re Rolling” in Do the
              Work
            </li>
            <li> [x] Research and design your project </li>
          </ol>
        </div>

        {/* Do the work reading */}
        <div className="section">
          <h2 className="title green">Do the Work Chapter 2 Response</h2>
          <p>
            I liked this reading - it talked about the importance of documenting
            your ideas, doing the research before you dive in, and how to take a
            large idea and break it into achievable parts. I don’t think this
            particular reading will change how I approach my project, if
            anything it reinforces my current approach which is to research,
            make sure I know exactly what I want to build and what I am going to
            build it with (as well as why I want to build it).
            <br></br>
            <br></br>
            <b className="green title">3 Key Takeaways</b>
            <br></br>
            <br></br>
            <span className="green title underline">
              1. Research before you jump into making.
            </span>
            <br></br>
            <br></br>
            You do NOT want to be doing heavy research while you’re in the
            making phase I like this statement because in the first part of the
            reading, there was the idea that you should just jump right in and
            start making. While that’s important, I like how this section
            refocused on research and stated its importance - you need to have a
            decently strong base of what you’re doing, why you’re doing it, and
            how you’re going to do it. You don’t want to be 3 weeks into
            building something and have to stop to conduct extensive research.
            <br></br>
            <br></br>
            <span className="green title underline">
              2. Ideas don’t come linearly
            </span>
            <br></br>
            <br></br>
            It’s up to you to take ideas as they come and form them into
            something cohesive. I like this because it emphasized the importance
            of tracking all of your ideas, even if they seem not to make sense
            with where you are currently in the project lifecycle.
            <br></br>
            <br></br>
            <span className="green title underline">
              3. Don’t scrap an idea just because you don’t like it one day
            </span>
            <br></br>
            <br></br>
            Keep it and come back to it. It may become something you want to
            pursue I noted this down because I have the tendency to completely
            scrap an idea if I don’t like it, but it’s important to be able to
            keep an idea and sit on it, even for weeks, so that you can come
            back to it later and get something from it. Disagreement I didn’t
            entirely agree with the “work work work” notion here. I think
            there’s a lot of value in not working on that project, value in
            stepping away and clearing your head - focusing on something else.
            It is often in those times where you’re not working that you come up
            with the greatest ideas and solutions to problems. So yes, lots of
            work is important, but so are breaks!
            <br></br>
            <br></br>
            <span className="green title underline">
              How does this relate to prior knowledge?
            </span>
            <br></br>
            <br></br>I think my main takeaway from this reading was that you
            should always gather ideas and document them, no matter what. You
            never know when they might be of use to you again.
          </p>
        </div>

        <div className="section">
          <h2 className="title green">Ideation & Mockups</h2>
          <h3>What I did this week</h3>
          <ol>
            <li>Read Spotify API docs and set up developer account</li>
            <li>Made mockups of the website UI</li>
            <li>Looked into other apps that do something similar</li>
            <li>
              Read up on React docs to refamiliarize myself with the framework
            </li>
            <li>
              Potential other project idea if this one doesn’t pan out (Codepen
              HTML/CSS practice)
            </li>
          </ol>

          <h3>Spotify Developer Account</h3>
          <img src={SpotifyAcct} alt="Spotify for developers web page"></img>

          <h2 className="title green">Mockups</h2>
          <h3>Moodboard</h3>
          <img src={Moodboard} alt="Moodboard for my website"></img>
          <h3>Pace</h3>
          <p>
            This screen was put together to have the user be able to quickly
            view the trajectory of their whole run and what songs are being
            played when
          </p>
          <img src={Pace} alt="Mockup for the pace page of my website"></img>
          <img src={PaceInspiration} alt="Inspiration for the pace page of the website"></img>
        </div>

        <h3>Playlist creation</h3>
        <p>
          I'm currently trying to figure out the best way to go about creating
          the playlist creation UI. I want it to be modular in the sense that
          you can create different sections of different paces so that you can
          do 10 minutes at 5mph, 20 minutes at 6mph, etc.
        </p>
        <img src={PlaylistCreator} alt="Playlist creator UI"></img>
        <img src={PlaylistCreatorv2} alt="Second iteration fo playlist crator UI"></img>
      </div>
    </div>
  );
}

export default Week2;
