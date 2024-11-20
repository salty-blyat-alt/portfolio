import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://ibb.co/album/mFxD0C"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://i.ibb.co/QpRGjxQ/homepage.png"
              className="zoom"
              style={{
                height: "20rem",
                objectFit: "cover",
                objectPosition: "top",
              }}
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://ibb.co/album/mFxD0C"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Modiste</h2>
          </a>
          <p>
            Independently developed an e-commerce application using Next.js and
            Node.js, designing the database architecture from scratch and
            managing all aspects of the project single-handedly.
          </p>
        </div>

        <div className="project">
          <a
            href="https://ibb.co/album/ZdYW7B"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://i.ibb.co/WksmTg9/homepage-flixtv.png"
              className="zoom"
              alt="thumbnail"
              style={{
                height: "20rem",
                objectFit: "cover",
                objectPosition: "top",
              }}
              width="100%"
            />
          </a>
          <a
            href="https://ibb.co/album/ZdYW7B"
            target="_blank"
            rel="noreferrer"
          >
            <h2>FlixTV</h2>
          </a>
          <p>
            Developed a feature-rich movie website using Laravel, integrating
            free public APIs such as TMDB and 2Embed to provide comprehensive
            and fully accessible movie content.
          </p>
        </div>
        {/* <div className="project">
          <a
            href="https://yujisatojr.itch.io/spacecraft"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock08} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://yujisatojr.itch.io/spacecraft"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Astro Raiders</h2>
          </a>
          <p>
            Developed and released a 2D shooting game with C# and Unity. This
            project is hosted on the Itch.io public marketplace.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Project;
