import "../week.scss";

function Week1() {
  return (
    <div className="weekContentWrapper">
      <div className="content">
        <h1 className="title">
          1/31/22 | Week 1 | Brainstorming, Initial Readings
        </h1>
        <p className="green">
          This week was all about coming up with ideas for the project. I also
          created this website to track my progress along the way!
        </p>

        <div className="section">
          <h2>This week's deliverables</h2>
          <ol>
            <li> [x] Join slack channel</li>
            <li> [x] Create google drive folder</li>
            <li> [x] Update shared google doc</li>
            <li> [x] Join Miro</li>
            <li> [x] Read letters from a previous cohort</li>
            <li>
              [x] Read Epicenter Design and post response to process website
            </li>
            <li> [x] Read Do The Work</li>
            <li> [x] Write response to Do The Work</li>
            <li> [x] Setup dedicated process website</li>
            <li> [x] Have about page, document project</li>
            <li> [x] Document process and project on project website</li>
            {/* <li> - [ ] Do Brainstorming exercises</li> */}
          </ol>
        </div>

        <div className="section">
          <h2 className="title underline green">Epicenter Design Response</h2>
          <p className="italic">
            The point of assigning this reading is not about building websites.
            How can you translate this reading to your medium? What is the
            epicenter of your concept? What is the epicenter of your story? What
            is the epicenter of your medium?
          </p>

          <p>
            In my case, I am seeking to create a web application so the
            translation of medium for this article is the same. However, I also
            would like to apply this methodology to my idea itself. As of now,
            my current idea is to create a website that helps curate Spotify
            playlists for runners aiming to achieve a certain pace. I plan to
            leverage the Spotify API, which gives data on the BPM of songs,
            their energy level, genre, etc. to create playlists that help
            runners maintain a certain pace while running. I later want to make
            a hardware integration using raspberry pi where users can tap a pace
            to run and they’ll receive a playlist of songs at that pace.
            Additionally, time permitting, I would like to make a more
            sophisticated system that allows users to plan out runs, starting at
            one pace, then speeding up or slowing down for a stretch, and having
            music that matches that ebb and flow.
            <br></br>
            <br></br>
            The center, the piece that it cannot live without, is the creation
            of playlists. Being able to take in a BPM as input, and generate an
            outputted playlist (potentially taking in genre as well, or
            searching their playlists) is the core interaction. The hardware
            interaction and increased customization (having certain BPM for
            certain time intervals) are additional interactions that build upon
            that core idea.
          </p>
        </div>

        <div class="section">
          <h2 className="title underline green">Do the Work</h2>
          <p>
            My response to this reading can be found{" "}
            <a href="https://docs.google.com/document/d/1mukS2Fd2G4Kw4spPv1bQ2VyeW26QPQUwT70IO9he5Js/edit?usp=sharing">
              here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Week1;
