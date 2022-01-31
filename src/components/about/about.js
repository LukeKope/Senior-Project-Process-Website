import "./about.scss";

function About() {
  return (
    <div className="aboutContentWrapper">
      <div className="content">
        <h1 className="green">About this Project</h1>

        <h3>What is it?</h3>
        <p>
          Automated playlist creation curated by BPM for keeping running pace.
          Music playlists that help you keep pace.
        </p>
       
        <h3>Who's it for?</h3>
        <p>
          Marathon/hobby runners who listen to music while they run and are
          training to keep a certain pace
        </p>

        <h3>What's the medium?</h3>
        <p>
          Website/web app, potential raspberry pi + physical item integration
          for interactivity
        </p>
      </div>
    </div>
  );
}

export default About;
