import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPython } from "@fortawesome/free-brands-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "ReactJS",
  "NextJS",
  "Typescript",
  "Javascript",
  "Tailwind",
  "Bootstrap",
];

const labelsSecond = ["Laravel", "NodeJS", "MySQL", "Oracle", "Postgres"];

const labelsThird = [
  "Flutter", 
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Frontend Development</h3>
            <p>
              I have built a diverse array of web applications using modern
              technologies using UI library such as Ant Design, Framer motion,
              MUI, and Shadcnui along with CSS framework such as Bootstrap and
              Tailwind.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faServer} size="3x" />
            <h3>Backend Development</h3>
            <p>
              I have experience utilizing Laravel and Node.js for API
              development, and I possess strong skills in database design.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Mobile Development</h3>
            <p>
            I am currently exploring mobile development using Flutter, 
            learning to build simple cross-platform applications and 
            understanding the fundamentals of responsive UI and app 
            structure.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
